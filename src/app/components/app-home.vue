<template>
  <div>欢迎访问宁皓网：） {{ isLoggedIn }}</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
    }),
  },
};
</script>
