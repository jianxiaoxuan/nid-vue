<template>
  <div class="auth-login">
    <div class="form">
      <h1 class="header">用户登录</h1>
      <TextField v-model="name" placeholder="用户" />
      <TextField v-model="password" placeholder="密码" type="password" />
      <div class="field">
        <button class="button large" @click="onClickLoginButton">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import TextField from '@/app/components/text-field.vue';

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
    onClickLoginButton() {
      console.log('login:', this.name, this.password);
    },
  },

  /**
   * 使用组件
   */
  components: {
    TextField,
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
