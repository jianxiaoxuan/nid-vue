<template>
  <div class="post-show-actions">
    <div class="action">
      <div class="icon">
        <AppIcon name="favorite" />
      </div>
      <div class="text">
        {{ post.totalLikes }}
      </div>
    </div>
    <div class="action">
      <div class="icon">
        <button class="button basic" @click="onClickCommentButton">
          <AppIcon name="comment" />
        </button>
      </div>
      <div class="text">
        {{ post.totalComments }}
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapMutations } from 'vuex';
import AppIcon from '@/app/components/app-icon.vue';

export default defineComponent({
  name: 'PostShowActions',

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
      sideSheetComponent: 'layout/sideSheetComponent',
    }),
  },

  /**
   * 已创建
   */
  created() {
    if (this.sideSheetComponent) {
      this.setSideSheetProps({
        filter: {
          post: this.post.id,
        },
      });
    }
  },

  /**
   * 组件方法
   */
  methods: {
    ...mapMutations({
      setSideSheetComponent: 'layout/setSideSheetComponent',
      resetSideSheet: 'layout/resetSideSheet',
      setSideSheetProps: 'layout/setSideSheetProps',
    }),

    onClickCommentButton() {
      if (this.sideSheetComponent) {
        this.resetSideSheet();
      } else {
        this.setSideSheetComponent('CommentSideSheet');

        this.setSideSheetProps({
          filter: {
            post: this.post.id,
          },
        });
      }
    },
  },

  /**
   * 使用组件
   */
  components: {
    AppIcon,
  },
});
</script>

<style scoped>
@import './styles/post-show-actions.css';
</style>
