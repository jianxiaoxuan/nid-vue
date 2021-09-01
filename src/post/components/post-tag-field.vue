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
    <div class="meta"></div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import AppIcon from '@/app/components/app-icon';
import TextField from '@/app/components/text-field';

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
    ...mapGetters({}),
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
    ...mapActions({}),

    onClickAddButton() {
      console.log('add');
    },

    onKeyUpEnterTag() {
      console.log('enter');
    },
  },

  /**
   * 使用组件
   */
  components: {
    TextField,
    AppIcon,
  },
});
</script>

<style scoped>
@import './styles/post-tag-field.css';
</style>
