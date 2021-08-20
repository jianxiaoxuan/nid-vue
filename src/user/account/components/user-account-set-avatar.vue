<template>
  <div class="user-account-set-avatar">
    <div class="form">
      <h2 class="header">设置头像</h2>
      <ButtonField text="提交" size="large" @click="onClickSubmitButton" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import ButtonField from '@/app/components/button-field.vue';

export default defineComponent({
  name: 'UserAccountSetAvatar',

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
    onClickSubmitButton() {
      console.log('设置头像');
    },
  },

  /**
   * 使用组件
   */
  components: {
    ButtonField,
  },
});
</script>

<style scoped></style>
