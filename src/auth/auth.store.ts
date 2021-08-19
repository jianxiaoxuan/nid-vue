import { Module } from 'vuex';
import { RootState } from '@/app/app.store';
import {
  authLoginStoreModule,
  AuthLoginStoreState,
} from './login/auth-login.store';

export interface AuthStoreState {
  login: AuthLoginStoreState;
  token: string | null;
}

export const authStoreModele: Module<AuthStoreState, RootState> = {
  /**
   * 命名空间
   */
  namespaced: true,

  /**
   * 数据
   */
  state: {
    token: null,
  } as AuthStoreState,

  /**
   * 获取器
   */
  getters: {
    isLoggedIn(state) {
      return state.token ? true : false;
    },
  },

  /**
   * 修改器
   */
  mutations: {
    setToken(state, data) {
      state.token = data;
    },
  },

  /**
   * 动作
   */
  actions: {},

  /**
   * 模块
   */
  modules: {
    login: authLoginStoreModule,
  },
};
