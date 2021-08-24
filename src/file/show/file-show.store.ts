import { Module } from 'vuex';
import { RootState } from '@/app/app.store';
import { apiHttpClient } from '@/app/app.service';

export interface FileMetadata {
  data: null;
}

export interface FileShowStoreState {
  loading: boolean;
  fileMetadata: FileMetadata | null;
}

export const fileShowStoreModule: Module<FileShowStoreState, RootState> = {
  /**
   * 命名空间
   */
  namespaced: true,

  /**
   * 数据
   */
  state: {
    loading: false,
    fileMetadata: null,
  } as FileShowStoreState,

  /**
   * 获取器
   */
  getters: {
    loading(state) {
      return state.loading;
    },

    fileMetadata(state) {
      return state.fileMetadata;
    },
  },

  /**
   * 修改器
   */
  mutations: {
    setLoading(state, data) {
      state.loading = data;
    },

    setFileMetadata(state, data) {
      state.fileMetadata = data;
    },
  },

  /**
   * 动作
   */
  actions: {
    async getFileById({ commit }, fileId) {
      commit('setLoading', true);

      try {
        const response = await apiHttpClient.get(`/files/${fileId}/metadata`);
        commit('setFileMetadata', response.data);
        commit('setLoading', false);

        return response;
      } catch (error) {
        commit('setLoading', false);

        throw error.response;
      }
    },
  },
};
