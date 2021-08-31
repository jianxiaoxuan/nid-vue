<template>
  <div class="reply-list-item">
    <div class="thumbnail">
      <UserAvatar :user="item.user" link="user" />
    </div>
    <div class="content">
      <ReplyListItemMeta :item="item" />
      <ReplyListItemContent :item="item" @click="onClickReplyListItemContent" />
      <ReplyListItemActions
        :item="item"
        :showOperation="showOperation"
        :comment="comment"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import UserAvatar from '@/user/components/user-avatar.vue';
import ReplyListItemMeta from './reply-list-item-meta.vue';
import ReplyListItemContent from './reply-list-item-content.vue';
import ReplyListItemActions from '@/reply/index/components/reply-list-item-actions';

export default defineComponent({
  name: 'ReplyListItem',

  /**
   * 属性
   */
  props: {
    item: {
      type: Object,
    },

    comment: {
      type: Object,
    },
  },

  /**
   * 数据
   */
  data() {
    return {
      showOperation: false,
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
    onClickReplyListItemContent() {
      this.showOperation = !this.showOperation;
    },
  },

  /**
   * 使用组件
   */
  components: {
    ReplyListItemActions,
    UserAvatar,
    ReplyListItemMeta,
    ReplyListItemContent,
  },
});
</script>

<style scoped>
@import './styles/reply-list-item.css';
</style>
