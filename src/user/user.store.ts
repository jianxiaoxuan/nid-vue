import { Module } from 'vuex';
import { RootState } from '@/app/app.store';
import {
  userShowStoreModule,
  UserShowStoreState,
} from './show/user-show.store';

export interface userStoreState {
  show: UserShowStoreState;
}

export const userStoreModule: Module<userStoreState, RootState> = {
  /**
   * 命名空间
   */
  namespaced: true,

  /**
   * 数据
   */
  state: {} as userStoreState,

  /**
   * 获取器
   */
  getters: {},

  /**
   * 修改器
   */
  mutations: {},

  /**
   * 动作
   */
  actions: {},

  /**
   * 模块
   */
  modules: {
    show: userShowStoreModule,
  },
};
