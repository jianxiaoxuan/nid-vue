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
import { mapActions } from 'vuex';
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
      avatarFile: null,
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
      createAvatar: 'user/account/createAvatar',
      pushManager: 'notification/pushMessage',
    }),

    async onClickSubmitButton() {
      try {
        await this.createAvatar(this.avatarFile);

        this.pushManager({ content: '成功设置了头像' });
      } catch (error) {
        this.pushManager({ content: '设置头像出问题了！' });
      }
    },

    onChangeAvatarFileField(files) {
      if (files.length) {
        this.avatarFile = files[0];
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
