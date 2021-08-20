<template>
  <div class="user-account-change-name">
    <div class="form">
      <h2 class="header">修改密码</h2>
      <TextField
        v-model="newPassword"
        placeholder="输入新的密码"
        type="password"
      />
      <TextField
        v-if="newPassword"
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
import { mapActions, mapGetters } from 'vuex';
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
      newPassword: '',
      password: '',
    };
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      currentUser: 'user/currentUser',
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
      pushMessage: 'notification/pushMessage',
      updateUserAccount: 'user/account/updateUserAccount',
    }),

    async onClickSubmitButton() {
      if (!this.newPassword) {
        return this.pushMessage({ content: '请先输入新的密码' });
      }

      try {
        await this.updateUserAccount({
          userId: this.currentUser.id,
          body: {
            update: {
              password: this.newPassword,
            },
            validate: {
              password: this.password,
            },
          },
        });

        this.pushMessage({ content: '成功修改了用户密码' });

        this.newPassword = '';
        this.password = '';
      } catch (error) {
        this.pushMessage({ content: error.data.message });
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
