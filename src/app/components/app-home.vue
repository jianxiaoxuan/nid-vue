<template>
  <div>欢迎访问宁皓网：） {{ isLoggedIn }}</div>
  <button class="button" @click="onClickPushMessageButton">Push Message</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
    }),
  },

  methods: {
    ...mapActions({
      pushMessage: 'notification/pushMessage',
    }),

    onClickPushMessageButton() {
      this.pushMessage({
        content: '空山新雨后，天气晚来秋',
        icon: 'cloud',
      });
    },
  },
};
</script>
