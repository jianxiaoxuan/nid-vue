<template>
  <div class="auth-login">
    <div class="form">
      <h1 class="header">用户登录</h1>
      <TextField v-model="name" placeholder="用户" />
      <TextField v-model="password" placeholder="密码" type="password" />
      <ButtonField text="登陆" size="large" @click="onClickLoginButton" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import TextField from '@/app/components/text-field.vue';
import ButtonField from '@/app/components/button-field.vue';

export default defineComponent({
  name: 'AuthLogin',

  /**
   * 标题
   */
  title() {
    return '用户登录';
  },

  /**
   * 属性
   */
  props: {},

  /**
   * 数据
   */
  data() {
    return {
      name: '',
      password: '',
    };
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      loading: 'auth/login/loading',
      loginResponseData: 'auth/login/loginResponseData',
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
      login: 'auth/login/login',
      pushMessage: 'notification/pushMessage',
    }),

    async onClickLoginButton() {
      try {
        const response = await this.login({
          name: this.name,
          password: this.password,
        });

        this.pushMessage({
          content: `欢迎回来 ${response.data.name}`,
        });
      } catch (error) {
        this.pushMessage({
          content: error.data.message,
        });
      }
    },
  },

  /**
   * 使用组件
   */
  components: {
    TextField,
    ButtonField,
  },
});
</script>

<style scoped>
.auth-login {
  max-width: 520px;
  margin: 0 auto;
  padding: 32px;
}
</style>
