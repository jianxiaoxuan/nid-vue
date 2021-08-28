<template>
  <div class="comment-create">
    <div class="thumbnail">
      <UserAvatar :user="currentUser" link="login" />
    </div>
    <div class="content">
      <TextareaField placeholder="发表评论" v-model="content" />
      <div class="actions">
        <button class="button" v-if="currentUser" @click="onClickCancelButton">
          取消
        </button>
        <button class="button" v-if="currentUser" @click="onClickSubmitButton">
          发布
        </button>
        <button
          class="button"
          v-if="!currentUser"
          @click="onClickRegisterButton"
        >
          注册
        </button>
        <button class="button" v-if="!currentUser" @click="onClickLoginButton">
          登陆
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import TextareaField from '@/app/components/textarea-field';
import UserAvatar from '@/user/components/user-avatar';
import { mapGetters, mapActions } from 'vuex';

export default defineComponent({
  name: 'CommentCreate',

  /**
   * 属性
   */
  props: {},

  /**
   * 数据
   */
  data() {
    return {
      content: '',
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
    ...mapActions({}),

    onClickCancelButton() {
      console.log('cancel');
    },
    onClickSubmitButton() {
      console.log('submit');
    },
    onClickRegisterButton() {
      console.log('register');
    },
    onClickLoginButton() {
      console.log('login');
    },
  },

  /**
   * 使用组件
   */
  components: {
    UserAvatar,
    TextareaField,
  },
});
</script>

<style scoped>
@import './styles/comment-create.css';
</style>
