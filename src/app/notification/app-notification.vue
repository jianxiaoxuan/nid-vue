<template>
  <div class="app-notification">
    <AppNotificationMessage
      v-for="message in messages"
      :key="message.id"
      :message="message"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppNotificationMessage from './components/app-notification-message.vue';

export default defineComponent({
  name: 'AppNotification',

  /**
   * 属性
   */
  props: {},

  /**
   * 数据
   */
  data() {
    return {
      messages: [
        {
          id: 1,
          content: '空山新雨后，天气晚来秋',
          icon: 'cloud',
        },
        {
          id: 2,
          content: '树树皆秋色，山山唯落晖',
          icon: 'landscape',
        },
        {
          id: 3,
          content: '人烟寒橘柚，秋色老梧桐',
        },
      ],
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
  methods: {},

  /**
   * 使用组件
   */
  components: {
    AppNotificationMessage,
  },
});
</script>

<style scoped>
.app-notification {
  position: fixed;
  bottom: 64px;
  right: 64px;
}
</style>
