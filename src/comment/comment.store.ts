import { Module } from 'vuex';
import { RootState } from '@/app/app.store';
import {
  commentIndexStoreModule,
  CommentIndexStoreState,
} from './index/comment-index.store';

export interface CommentStoreState {
  index: CommentIndexStoreState;
}

export const commentStoreModule: Module<CommentStoreState, RootState> = {
  /**
   * 命名空间
   */
  namespaced: true,

  /**
   * 数据
   */
  state: {} as CommentStoreState,

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
    index: commentIndexStoreModule,
  },
};
