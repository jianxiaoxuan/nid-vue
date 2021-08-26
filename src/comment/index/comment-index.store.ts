import { Module } from 'vuex';
import { RootState } from '@/app/app.store';
import { apiHttpClient } from '@/app/app.service';

export interface CommentListItem {
  id: number;
  content: string;
  user: {
    id: number;
    name: string;
    avatar: number;
  };
  post: {
    id: number;
    title: string;
  };
  totalReplies: number | null;
}

export type Comments = Array<CommentListItem>;

export interface CommentIndexStoreState {
  loading: boolean;
  comments: Comments;
}

export const commentIndexStoreModule: Module<
  CommentIndexStoreState,
  RootState
> = {
  /**
   * 命名空间
   */
  namespaced: true,

  /**
   * 数据
   */
  state: {
    loading: false,
    comments: [],
  } as CommentIndexStoreState,

  /**
   * 获取器
   */
  getters: {
    loading(state) {
      return state.loading;
    },

    comments(state) {
      return state.comments;
    },
  },

  /**
   * 修改器
   */
  mutations: {
    setLoading(state, data) {
      state.loading = data;
    },

    setComments(state, data) {
      state.comments = data;
    },
  },

  /**
   * 动作
   */
  actions: {
    async getComments({ commit }) {
      commit('setLoading', true);

      try {
        const response = await apiHttpClient.get(`comments`);
        commit('setComments', response.data);
        commit('setLoading', false);

        return response;
      } catch (error) {
        commit('setLoading', false);

        throw error.response;
      }
    },
  },
};
