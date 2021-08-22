import { Module } from 'vuex';
import { RootState } from '@/app/app.store';

export interface AppToolbarStoreState {
  showPostListLayoutSwitcher: boolean;
}

export const appToolbarStoreModule: Module<AppToolbarStoreState, RootState> = {
  /**
   * 命名空间
   */
  namespaced: true,

  /**
   * 数据
   */
  state: {
    showPostListLayoutSwitcher: false,
  } as AppToolbarStoreState,

  /**
   * 获取器
   */
  getters: {
    showPostListLayoutSwitcher(state) {
      return state.showPostListLayoutSwitcher;
    },
  },

  /**
   * 修改器
   */
  mutations: {
    setShowPostListLayoutSwitcher(state, data) {
      state.showPostListLayoutSwitcher = data;
    },
  },

  /**
   * 动作
   */
  actions: {},
};
