import { Module } from 'vuex';
import { RootState } from '@/app/app.store';

export interface AppNotificationMessage {
  id: number;
  content: string;
  icon: string;
  duration: number;
}

export interface AppNotificationStoreState {
  messages: Array<AppNotificationMessage>;
}

export const appNotificationStoreModule: Module<
  AppNotificationStoreState,
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
    messages: [],
  } as AppNotificationStoreState,

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
};
