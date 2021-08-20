import { Module } from 'vuex';
import { RootState } from '@/app/app.store';
import { apiHttpClient } from '@/app/app.service';

export interface UserAccountStoreState {
  loading: boolean;
  avatarPreviewImage: string;
}

export const userAccountStoreModule: Module<
  UserAccountStoreState,
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
    avatarPreviewImage: '',
  } as UserAccountStoreState,

  /**
   * 获取器
   */
  getters: {
    loading(state) {
      return state.loading;
    },

    avatarPreviewImage(state) {
      return state.avatarPreviewImage;
    },
  },

  /**
   * 修改器
   */
  mutations: {
    setLoading(state, data) {
      state.loading = data;
    },

    setAvatarPreviewImage(state, data) {
      state.avatarPreviewImage = data;
    },
  },

  /**
   * 动作
   */
  actions: {
    async createAvatar({ commit }, file) {
      commit('setLoading', true);

      const formData = new FormData();
      formData.append('avatar', file);

      try {
        const response = await apiHttpClient.post('/avatar', formData);
        commit('setLoading', false);

        return response;
      } catch (error) {
        commit('setLoading', false);
        throw error.response;
      }
    },
  },
};
