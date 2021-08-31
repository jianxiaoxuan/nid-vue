<template>
  <div class="reply-create">
    <div class="thumbnail">
      <UserAvatar :user="currentUser" />
    </div>
    <div class="content">
      <TextareaField
        placeholder="回复评论"
        v-model="content"
        @keydown="onKeyDownReplyTextarea"
      />
      <div class="actions">
        <button class="button pill" @click="onClickCancelButton">取消</button>
        <button class="button pill" @click="onClickReplyButton">回复</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import TextareaField from '@/app/components/textarea-field';
import UserAvatar from '@/user/components/user-avatar';

export default defineComponent({
  name: 'ReplyCreate',

  /**
   * 属性
   */
  props: {
    comment: {
      type: Object,
    },
  },

  /**
   * 数据
   */
  data() {
    return {
      content: '',
    };
  },

  /**
   * 事件
   */
  emits: ['replied'],

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      currentUser: 'user/currentUser',
    }),
  },

  /**
   * 已创建
   */
  created() {
    //
  },

  /**
   * 组件方法
   */
  methods: {
    ...mapMutations({}),
    ...mapActions({
      createReply: 'reply/create/createReply',
      pushMessage: 'notification/pushMessage',
    }),

    async submitReply() {
      if (!this.content.trim()) return;

      try {
        await this.createReply({
          commentId: this.comment.id,
          postId: this.comment.post.id,
          content: this.content,
        });

        this.content = '';

        this.$emit('replied', this.comment.id);
      } catch (error) {
        this.pushMessage({ content: error.data.message });
      }
    },

    onClickCancelButton() {
      this.content = '';
    },

    onClickReplyButton() {
      console.log('reply');
    },

    onKeyDownReplyTextarea(event) {
      if (
        (event.ctrlKey && event.key === 'Enter') ||
        (event.metaKey && event.key === 'Enter')
      ) {
        this.submitReply();
      }
    },
  },

  /**
   * 使用组件
   */
  components: {
    UserAvatar,
    TextareaField,
  },
});
</script>

<style scoped>
@import './styles/reply-create.css';
</style>
