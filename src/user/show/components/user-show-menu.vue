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
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'UserShowMenu',

  /**
   * 属性
   */
  props: {
    user: {
      type: Object,
    },
  },

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
      userAccountItem: {
        linkTo: { name: 'userAccount' },
        text: '账户',
      },
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
   * 监视
   */
  watch: {
    user() {
      if (this.currentUser && this.currentUser.id === this.user.id) {
        this.addUserAccountItem();
      } else {
        this.deleteUserAccountItem();
      }
    },
  },

  /**
   * 组件方法
   */
  methods: {
    addUserAccountItem() {
      if (this.menuItems.some(item => item.text !== '账户')) {
        this.menuItems = [...this.menuItems, this.userAccountItem];
      }
    },

    deleteUserAccountItem() {
      this.menuItems = this.menuItems.filter(item => item.text !== '账户');
    },
  },

  /**
   * 使用组件
   */
  components: {},
});
</script>

<style scoped>
@import './styles/user-show-menu.css';
</style>
