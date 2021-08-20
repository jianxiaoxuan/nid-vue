<template>
  <div class="user-account-set-avatar">
    <div class="form">
      <h2 class="header">设置头像</h2>
      <div class="field" v-if="avatarPreviewImage">
        <div class="user-avatar large">
          <img :src="avatarPreviewImage" class="image" />
        </div>
      </div>
      <div class="fields">
        <FileField
          text="选择文件"
          size="large"
          name="avatar"
          fileType="image/*"
          @change="onChangeAvatarFileField"
        />
        <ButtonField text="提交" size="large" @click="onClickSubmitButton" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import ButtonField from '@/app/components/button-field.vue';
import FileField from '@/app/components/file-field.vue';

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
    return {
      avatarPreviewImage: '',
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
    onClickSubmitButton() {
      console.log('设置头像');
    },

    onChangeAvatarFileField(files) {
      if (files.length) {
        this.createAvatarPreviewImage(files[0]);
      }
    },

    createAvatarPreviewImage(file) {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onload = event => {
        this.avatarPreviewImage = event.target.result;
      };
    },
  },

  /**
   * 使用组件
   */
  components: {
    ButtonField,
    FileField,
  },
});
</script>

<style scoped></style>
