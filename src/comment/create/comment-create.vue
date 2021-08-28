<template>
  <div class="comment-create">
    <div class="thumbnail">
      <UserAvatar :user="currentUser" link="login" />
    </div>
    <div class="content">
      <TextareaField
        placeholder="发表评论"
        v-model="content"
        @keyup.stop
        @keydown.stop="onKeyDownCommentTextarea"
      />
      <div class="actions">
        <button class="button" v-if="currentUser" @click="onClickCancelButton">
          取消
        </button>
        <button class="button" v-if="currentUser" @click="onClickSubmitButton">
          发布
        </button>
        <button
          class="button"
          v-if="!currentUser"
          @click="onClickRegisterButton"
        >
          注册
        </button>
        <button class="button" v-if="!currentUser" @click="onClickLoginButton">
          登陆
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import TextareaField from '@/app/components/textarea-field';
import UserAvatar from '@/user/components/user-avatar';
import { mapGetters, mapActions } from 'vuex';

export default defineComponent({
  name: 'CommentCreate',

  /**
   * 属性
   */
  props: {},

  /**
   * 数据
   */
  data() {
    return {
      content: '',
    };
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      currentUser: 'user/currentUser',
      sideSheetProps: 'layout/sideSheetProps',
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
    ...mapActions({
      pushMessage: 'notification/pushMessage',
      createComment: 'comment/create/createComment',
    }),

    async submitComment() {
      if (!this.currentUser) {
        this.pushMessage({ content: '请先登陆' });
        return;
      }

      try {
        await this.createComment({
          postId: this.sideSheetProps.filter.post,
          content: this.content,
        });

        this.content = '';
      } catch (error) {
        this.pushMessage({ content: error.data.message });
      }
    },

    onClickCancelButton() {
      this.content = '';
    },
    onClickSubmitButton() {
      this.submitComment();
    },
    onClickRegisterButton() {
      console.log('register');
    },
    onClickLoginButton() {
      console.log('login');
    },

    onKeyDownCommentTextarea(event) {
      if (
        (event.ctrlKey && event.key === 'Enter') ||
        (event.metaKey && event.key === 'Enter')
      ) {
        this.submitComment();
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
@import './styles/comment-create.css';
</style>
