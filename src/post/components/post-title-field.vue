<template>
  <div class="post-title-field">
    <TextField placeholder="标题" v-model="postTitle" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapMutations } from 'vuex';
import TextField from '@/app/components/text-field';

export default defineComponent({
  name: 'PostTitleField',

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
      title: 'post/create/title',
    }),

    postTitle: {
      get() {
        return this.title;
      },
      set(value) {
        this.setTitle(value);
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
      setTitle: 'post/create/setTitle',
    }),
  },

  /**
   * 使用组件
   */
  components: {
    TextField,
  },
});
</script>

<style scoped>
@import './styles/post-title-field.css';
</style>
