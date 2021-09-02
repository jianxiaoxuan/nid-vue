import { Module } from 'vuex';
import { RootState } from '@/app/app.store';
import { apiHttpClient } from '@/app/app.service';

export interface PostCreateStoreState {
  postId: number | null;
  title: string;
  content: string;
  loading: boolean;
}

export interface CreatePostData {
  title: string;
  content?: string;
}

export interface CreatePostOptions {
  data?: CreatePostData;
}

export const postCreateStoreModule: Module<PostCreateStoreState, RootState> = {
  /**
   * 命名空间
   */
  namespaced: true,

  /**
   * 数据
   */
  state: {
    postId: null,
    title: '',
    content: '',
    loading: false,
  } as PostCreateStoreState,

  /**
   * 获取器
   */
  getters: {
    postId(state) {
      return state.postId;
    },

    title(state) {
      return state.title;
    },

    content(state) {
      return state.content;
    },

    loading(state) {
      return state.loading;
    },
  },

  /**
   * 修改器
   */
  mutations: {
    setPostId(state, data) {
      state.postId = data;
    },

    setTitle(state, data) {
      state.title = data;
    },

    setContent(state, data) {
      state.content = data;
    },

    setLoading(state, data) {
      state.loading = data;
    },
  },

  /**
   * 动作
   */
  actions: {
    async createPost({ commit }, options: CreatePostOptions = {}) {
      commit('setLoading', true);

      const { data } = options;

      try {
        const response = await apiHttpClient.post(`posts`, data);
        commit('setLoading', false);
        commit('setPostId', response.data.insertId);

        return response;
      } catch (error) {
        commit('setLoading', false);

        throw error.response;
      }
    },
  },

  /**
   * 模块
   */
  modules: {},
};
