<template>
  <div class="comment-list-item">
    <div class="thumbnail">
      <UserAvatar :user="item.user" link="user" />
    </div>
    <div class="content">
      <CommentListItemMeta :item="item" />
      <CommentListItemContent
        :item="comment"
        @click="onClickCommentListItemContent"
        v-if="!isEditing"
      />
      <CommentEdit
        v-if="isEditing"
        :comment="item"
        @updated="onUpdatedComment"
      />
      <CommentListItemActions
        :item="item"
        @toggle-replies="onToggleReplies"
        :showOperation="showOperation"
        @editing="onEditingComment"
        :isEditing="isEditing"
        @replying="onReplyingComment"
        :isReplying="isReplying"
      />
      <ReplyCreate v-if="isReplying" :comment="item" />
      <ReplyIndex :comment="item" v-if="showReplies" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import UserAvatar from '@/user/components/user-avatar.vue';
import CommentListItemMeta from './comment-list-item-meta.vue';
import CommentListItemContent from './comment-list-item-content.vue';
import CommentListItemActions from './comment-list-item-actions.vue';
import ReplyIndex from '@/reply/index/reply-index.vue';
import CommentEdit from '@/comment/edit/comment-edit';
import ReplyCreate from '@/reply/create/reply-create';

export default defineComponent({
  name: 'CommentListItem',

  /**
   * 属性
   */
  props: {
    item: {
      type: Object,
    },
  },

  /**
   * 数据
   */
  data() {
    return {
      showReplies: false,
      showOperation: false,
      isEditing: false,
      comment: this.item,
      isReplying: false,
    };
  },

  /**
   * 计算属性
   */
  computed: {},

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
    onToggleReplies(data) {
      this.showReplies = data;
    },

    onClickCommentListItemContent() {
      this.showOperation = !this.showOperation;
    },

    onEditingComment() {
      this.isEditing = !this.isEditing;
    },

    onUpdatedComment(data) {
      this.comment.content = data;
      this.isEditing = false;
    },

    onReplyingComment() {
      this.isReplying = !this.isReplying;
    },
  },

  /**
   * 使用组件
   */
  components: {
    ReplyCreate,
    CommentEdit,
    UserAvatar,
    CommentListItemMeta,
    CommentListItemContent,
    CommentListItemActions,
    ReplyIndex,
  },
});
</script>

<style scoped>
@import './styles/comment-list-item.css';
</style>
