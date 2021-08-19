<template>
  <div :class="userNameClasses">
    <div class="user-name-text">
      <router-link :to="userNameLinkTo" class="link">
        {{ user.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserName',

  /**
   * 属性
   */
  props: {
    user: {
      type: Object,
    },

    size: {
      type: String,
    },
  },

  /**
   * 数据
   */
  data() {
    return {};
  },

  /**
   * 计算属性
   */
  computed: {
    userNameClasses() {
      return ['user-name', this.size];
    },

    userNameLinkTo() {
      return {
        name: 'userShow',
        params: { userId: this.user.id },
      };
    },
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
  methods: {},

  /**
   * 使用组件
   */
  components: {},
});
</script>

<style scoped>
@import './styles/user-name.css';
</style>
