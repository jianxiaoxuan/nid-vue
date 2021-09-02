<template>
  <div class="post-content-field">
    <TextareaField
      placeholder="描述"
      class="bordered"
      :rows="1"
      v-model="postContent"
      @dirty="onDirtyTextarea"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapMutations } from 'vuex';
import TextareaField from '@/app/components/textarea-field';

export default defineComponent({
  name: 'PostContentField',

  /**
   * 属性
   */
  props: {},

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
      content: 'post/create/content',
      unsaved: 'post/create/unsaved',
    }),

    postContent: {
      get() {
        return this.content;
      },

      set(value) {
        this.setContent(value);
      },
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
  methods: {
    ...mapMutations({
      setContent: 'post/create/setContent',
      setUnsaved: 'post/create/setUnsaved',
    }),

    onDirtyTextarea() {
      if (!this.unsaved) {
        this.setUnsaved(true);
      }
    },
  },

  /**
   * 使用组件
   */
  components: {
    TextareaField,
  },
});
</script>

<style scoped>
@import './styles/post-content-field.css';
</style>
