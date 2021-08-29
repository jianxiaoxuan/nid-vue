<template>
  <div class="comment-list-item-actions">
    <div class="action" v-if="item.totalReplies">
      <button class="button basic" @click="onClickTotalRepliesButton">
        {{ item.totalReplies }} 条回复
        <AppIcon :name="totalRepliesIconName" />
      </button>
    </div>
    <div class="action" v-if="showOwnCommentOperation">
      <button class="button basic" @click="onClickDeleteButton">
        {{ deleteButtonText }}
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import AppIcon from '@/app/components/app-icon.vue';

export default defineComponent({
  name: 'CommentListItemActions',

  /**
   * 属性
   */
  props: {
    item: {
      type: Object,
    },

    showOperation: {
      type: Boolean,
    },
  },

  /**
   * 数据
   */
  data() {
    return {
      showReplies: false,
      confirmDelete: false,
    };
  },

  /**
   * 事件
   */
  emits: ['toggle-replies'],

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      currentUser: 'user/currentUser',
    }),

    totalRepliesIconName() {
      return this.showReplies ? 'arrow_drop_up' : 'arrow_drop_down';
    },

    showOwnCommentOperation() {
      return (
        this.currentUser &&
        this.currentUser.id === this.item.user.id &&
        this.showOperation
      );
    },

    deleteButtonText() {
      return this.confirmDelete ? '确定删除' : '删除';
    },
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
    onClickTotalRepliesButton() {
      this.showReplies = !this.showReplies;
      this.$emit('toggle-replies', this.showReplies);
    },

    onClickDeleteButton() {
      this.confirmDelete = !this.confirmDelete;
    },
  },

  /**
   * 使用组件
   */
  components: {
    AppIcon,
  },
});
</script>

<style scoped>
@import './styles/comment-list-item-actions.css';
</style>
