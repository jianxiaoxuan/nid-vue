<template>
  <div class="app-notification-message">
    <div class="icon">
      <AppIcon :name="messageIcon" />
    </div>
    <div class="content">{{ message.content }}</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppIcon from '@/app/components/app-icon.vue';

export default defineComponent({
  name: 'AppNotificationMessage',

  /**
   * 属性
   */
  props: {
    message: {
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
  computed: {
    messageIcon() {
      return this.message.icon ? this.message.icon : 'info';
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
  methods: {},

  /**
   * 使用组件
   */
  components: {
    AppIcon,
  },
});
</script>

<style scoped></style>
