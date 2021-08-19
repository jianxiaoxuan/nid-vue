<template>
  <div class="user-show-menu">
    <div
      class="user-show-menu-item"
      v-for="(item, index) in menuItems"
      :key="index"
    >
      <router-link class="link" :to="item.linkTo">{{ item.text }}</router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserShowMenu',

  /**
   * 属性
   */
  props: {},

  /**
   * 数据
   */
  data() {
    return {
      menuItems: [
        {
          linkTo: { name: 'userPosts' },
          text: '作品',
        },
        {
          linkTo: { name: 'userLiked' },
          text: '喜欢',
        },
        {
          linkTo: { name: 'userComments' },
          text: '评论',
        },
        {
          linkTo: { name: 'userReplies' },
          text: '回复',
        },
      ],
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
  methods: {},

  /**
   * 使用组件
   */
  components: {},
});
</script>

<style scoped>
@import './styles/user-show-menu.css';
</style>
