import { Module } from 'vuex';
import { RootState } from '@/app/app.store';
import { apiHttpClient } from '@/app/app.service';

export interface CommentCreateStoreState {
  loading: boolean;
}

export interface CreateCommentOptions {
  data?: null;
}

export const commentCreateStoreModule: Module<CommentCreateStoreState, RootState> = {
  /**
   * 命名空间
   */
  namespaced: true,

  /**
   * 数据
   */
  state: {
    loading: false,
  } as CommentCreateStoreState,

  /**
   * 获取器
   */
  getters: {
    loading(state) {
      return state.loading;
    },
  },

  /**
   * 修改器
   */
  mutations: {
    setLoading(state, data) {
      state.loading = data;
    },
  },

  /**
   * 动作
   */
  actions: {
    async createComment({ commit }, options: CreateCommentOptions = {}) {
      commit('setLoading', true);

      try {
        const response = await apiHttpClient.get(`comments`);
        commit('setLoading', false);

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
  modules: {
  },
};
