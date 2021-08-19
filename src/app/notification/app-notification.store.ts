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
  getters: {
    messages(state) {
      return state.messages;
    },
  },

  /**
   * 修改器
   */
  mutations: {
    addMessage(state, data) {
      state.messages = [data, ...state.messages];
    },
  },

  /**
   * 动作
   */
  actions: {
    pushMessage({ commit }, data) {
      const id = Date.now();

      const message = {
        id,
        ...data,
      };

      commit('addMessage', message);
    },
  },
};
