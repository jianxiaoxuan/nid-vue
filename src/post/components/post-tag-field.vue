<template>
  <div class="post-tag-field">
    <div class="content">
      <TextField
        placeholder="标签"
        v-model="name"
        @keyup.enter="onKeyUpEnterTag"
      />
      <button class="button basic" @click="onClickAddButton">
        <AppIcon name="add" />
      </button>
    </div>
    <div class="meta" v-if="tags">
      <PostTag v-for="tag in tags" :key="tag.id" :tag="tag" useDeleteButton />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import AppIcon from '@/app/components/app-icon';
import TextField from '@/app/components/text-field';
import PostTag from '@/post/components/post-tag';

export default defineComponent({
  name: 'PostTagField',

  /**
   * 属性
   */
  props: {
    postId: {
      type: Number,
    },
  },

  /**
   * 数据
   */
  data() {
    return {
      name: '',
    };
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      tags: 'post/edit/tags',
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
    ...mapMutations({}),
    ...mapActions({
      createPostTag: 'post/edit/createPostTag',
      pushMessage: 'notification/pushMessage',
    }),

    onClickAddButton() {
      this.submitCreatePostTag();
    },

    onKeyUpEnterTag() {
      this.submitCreatePostTag();
    },

    async submitCreatePostTag() {
      if (!this.name) return;

      try {
        await this.createPostTag({
          postId: this.postId,
          data: {
            name: this.name,
          },
        });
      } catch (error) {
        this.pushMessage({ content: error.data.message });
      }
    },
  },

  /**
   * 使用组件
   */
  components: {
    PostTag,
    TextField,
    AppIcon,
  },
});
</script>

<style scoped>
@import './styles/post-tag-field.css';
</style>
