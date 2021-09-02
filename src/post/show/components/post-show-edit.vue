<template>
  <div class="post-show-edit" v-if="canEdit">
    <router-link class="button pill" :to="editLinkTo">
      编辑
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'PostShowEdit',

  /**
   * 属性
   */
  props: {
    post: {
      type: Object,
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
    ...mapGetters({
      currentUser: 'user/currentUser',
    }),

    editLinkTo() {
      return {
        name: 'postCreate',
        query: {
          post: this.post.id,
        },
      };
    },

    canEdit() {
      const ownPost =
        this.currentUser && this.currentUser.id === this.post.user.id;

      const isAdmin = this.currentUser && this.currentUser.id === 1;

      return ownPost || isAdmin;
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
@import './styles/post-show-edit.css';
</style>
