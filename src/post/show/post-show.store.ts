import { Module } from 'vuex';
import { apiHttpClient } from '../../app/app.service';
import { RootState } from '../../app/app.store';
import { User } from '../../user/show/user-show.store';
import { postFileProcess } from '../post.service';
import appRouter from '@/app/app.router';

export default interface Post {
  id: number;
  title: string;
  content: string;
  user: User;
  totalComments: number;
  totalLikes: number;
  file: {
    id: number;
    width: number;
    height: number;
    orientation: string;
    size: {
      thumbnail: string;
      medium: string;
      large: string;
    };
  };
  tags: [
    {
      id: number;
      name: string;
    },
  ];
}

export interface PostShowStoreState {
  loading: boolean;
  post: Post;
  layout: string;
}

export const postShowStoreModule: Module<PostShowStoreState, RootState> = {
  namespaced: true,

  state: {
    loading: false,
    post: {},
    layout: '',
  } as PostShowStoreState,

  getters: {
    loading(state) {
      return state.loading;
    },

    post(state) {
      return Object.keys(state.post).length
        ? postFileProcess(state.post)
        : null;
    },

    layout(state) {
      return state.layout;
    },

    currentPostIndex(state, _, rootState) {
      return rootState.post.index.posts.findIndex(
        item => item.id === state.post.id,
      );
    },

    prevPost(_, getters, rootState) {
      return rootState.post.index.posts[getters.currentPostIndex - 1];
    },

    nextPost(_, getters, rootState) {
      return rootState.post.index.posts[getters.currentPostIndex + 1];
    },

    canNavigateBack(_, getters, rootState) {
      return (
        rootState.post.index.posts.length > 0 && getters.currentPostIndex !== 0
      );
    },

    canNavigateForward(_, getters, rootState) {
      return (
        rootState.post.index.posts.length > 0 &&
        rootState.post.index.posts.length !== getters.currentPostIndex + 1
      );
    },

    canGetMorePosts(_, getters, rootState, rootGetters) {
      return (
        rootGetters['post/index/hasMore'] &&
        rootState.post.index.posts.length - getters.currentPostIndex < 3
      );
    },
  },

  mutations: {
    setLoading(state, data) {
      state.post = data;
    },

    setPost(state, data) {
      state.post = data;
    },

    setLayout(state, data) {
      state.layout = data;
    },
  },

  actions: {
    async getPostById({ commit }, postId) {
      commit('setLoading', true);

      try {
        const response = await apiHttpClient.get(`/posts/${postId}`);
        commit('setLoading', false);
        commit('setPost', response.data);

        return response;
      } catch (error) {
        commit('setLoading', false);

        throw error.response;
      }
    },

    async goGetPrevPost({ getters, dispatch }) {
      if (!getters.canNavigateBack) return;

      try {
        const prevPostId = getters.prevPost.id;
        const response = await dispatch('getPostById', prevPostId);

        appRouter.replace({
          name: 'postShow',
          params: { postId: prevPostId },
        });

        return response;
      } catch (error) {
        throw error.response;
      }
    },

    async goGetNextPost({ getters, dispatch }) {
      const nextPostId = getters.nextPost.id;
      if (!getters.canNavigateForward) return;

      if (getters.canGetMorePosts) {
        dispatch('post/index/getPosts', {}, { root: true });
      }

      try {
        const response = await dispatch('getPostById', nextPostId);

        appRouter.replace({
          name: 'postShow',
          params: { postId: nextPostId },
        });

        return response;
      } catch (error) {
        throw error.response;
      }
    },
  },
};
