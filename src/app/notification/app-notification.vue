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
import { mapGetters } from 'vuex';
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
    return {};
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      messages: 'notification/messages',
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
