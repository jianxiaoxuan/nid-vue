<template>
  <div class="post-create">
    <TextField placeholder="标题" v-model="title" />
    <TextareaField
      placeholder="描述"
      class="bordered"
      :rows="1"
      v-model="content"
    />
    <button class="button large" @click="onClickSubmitButton">
      {{ submitButtonText }}
    </button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import TextField from '@/app/components/text-field';
import TextareaField from '@/app/components/textarea-field';
import { mapGetters, mapActions } from 'vuex';

export default defineComponent({
  name: 'PostCreate',

  /**
   * 属性
   */
  props: {},

  /**
   * 数据
   */
  data() {
    return {
      title: '',
      content: '',
      postId: null,
    };
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({}),

    submitButtonText() {
      return this.postId ? '更新' : '发布';
    },
  },

  /**
   * 监视
   */
  watch: {
    $route(to, from) {
      const { post: postId } = to.query;

      if (postId) {
        this.getPost(postId);
      } else {
        this.reset();
      }
    },
  },

  /**
   * 已创建
   */
  created() {
    const { post: postId } = this.$route.query;

    if (postId) {
      this.getPost(postId);
    }
  },

  /**
   * 组件方法
   */
  methods: {
    ...mapActions({
      createPost: 'post/create/createPost',
      pushMessage: 'notification/pushMessage',
      getPostById: 'post/show/getPostById',
    }),

    onClickSubmitButton() {
      if (!this.title.trim()) return;

      this.submitCreatePost();
    },

    async submitCreatePost() {
      try {
        const response = await this.createPost({
          data: {
            title: this.title,
            content: this.content,
          },
        });

        this.postId = response.data.insertId;

        this.$router.push({
          name: 'postCreate',
          query: { post: this.postId },
        });
      } catch (error) {
        this.pushMessage({ content: error.data.message });
      }
    },

    async getPost(postId) {
      try {
        const response = await this.getPostById(postId);
        const { title, content } = response.data;

        this.postId = postId;
        this.title = title;
        this.content = content;
      } catch (error) {
        this.pushMessage({ content: error.data.message });
      }
    },

    reset() {
      this.title = '';
      this.content = '';
      this.postId = null;
    },
  },

  /**
   * 使用组件
   */
  components: {
    TextField,
    TextareaField,
  },
});
</script>

<style scoped>
@import './styles/post-create.css';
</style>
