<template>
  <div class="reply-list-item">
    <div class="thumbnail">
      <UserAvatar :user="item.user" link="user" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import UserAvatar from '@/user/components/user-avatar.vue';

export default defineComponent({
  name: 'ReplyListItem',

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
    return {};
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
  methods: {},

  /**
   * 使用组件
   */
  components: {
    UserAvatar,
  },
});
</script>

<style scoped>
@import './styles/reply-list-item.css';
</style>
