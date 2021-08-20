<template>
  <div class="user-account-change-name">
    <div class="form">
      <h2 class="header">修改名字</h2>
      <TextField v-model="newName" placeholder="输入新的用户名" />
      <TextField
        v-if="newName"
        v-model="password"
        placeholder="验证用户登录密码"
        type="password"
      />
      <ButtonField text="提交" size="large" @click="onClickSubmitButton" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';
import TextField from '@/app/components/text-field.vue';
import ButtonField from '@/app/components/button-field.vue';

export default defineComponent({
  name: 'UserAccountChangeName',

  /**
   * 属性
   */
  props: {},

  /**
   * 数据
   */
  data() {
    return {
      newName: '',
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
    ...mapActions({
      pushMessage: 'notification/pushMessage',
    }),

    onClickSubmitButton() {
      if (!this.newName) {
        return this.pushMessage({ content: '请输入新的用户名' });
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

<style scoped></style>
