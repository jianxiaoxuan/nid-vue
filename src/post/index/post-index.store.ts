import { Module } from 'vuex';
import { API_BASE_URL, POSTS_PER_PAGE } from '../../app/app.config';
import { apiHttpClient } from '../../app/app.service';
import { RootState } from '../../app/app.store';
import { User } from '../../user/show/user-show.store';

export interface PostListItem {
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

export interface PostIndexStoreState {
  loading: boolean;
  posts: Array<PostListItem>;
  layout: string;
  nextPage: number;
  totalPages: number;
}

export interface GetPostsOptions {
  sort?: string;
}

export const postIndexStoreModule: Module<PostIndexStoreState, RootState> = {
  namespaced: true,

  state: {
    loading: false,
    posts: [],
    layout: '',
    nextPage: 1,
    totalPages: 1,
  } as PostIndexStoreState,

  getters: {
    loading(state) {
      return state.loading;
    },

    posts(state) {
      return state.posts.map(post => {
        let { file } = post;

        if (file) {
          const { id: fileId, width, height } = file;
          const fileBaseUrl = `${API_BASE_URL}/files/${fileId}/serve`;
          const orientation = width > height ? 'horizontal' : 'portrait';

          file = {
            ...file,
            orientation,
            size: {
              thumbnail: `${fileBaseUrl}?size=thumbnail`,
              medium: `${fileBaseUrl}?size=medium`,
              large: `${fileBaseUrl}?size=large`,
            },
          };

          post = {
            ...post,
            file,
          };
        }

        return post;
      });
    },

    layout(state) {
      return state.layout;
    },

    hasMore(state) {
      return state.totalPages - state.nextPage >= 0;
    },
  },

  mutations: {
    setLoading(state, data) {
      state.loading = data;
    },

    setPosts(state, data) {
      state.posts = data;
    },

    setLayout(state, data) {
      state.layout = data;
    },

    setTotalPages(state, data) {
      state.totalPages = data;
    },

    setNextPage(state, data) {
      if (data) {
        state.nextPage = data;
      } else {
        state.nextPage++;
      }
    },
  },

  actions: {
    async getPosts({ commit, state, dispatch }, options: GetPostsOptions = {}) {
      commit('setLoading', true);

      try {
        const response = await apiHttpClient.get(
          `/posts?page=${state.nextPage}&sort=${options.sort}`,
        );

        dispatch('getPostsPostProcess', response);
        return response;
      } catch (error) {
        commit('setLoading', false);
        throw error.response;
      }
    },

    getPostsPostProcess({ commit, state }, response) {
      if (state.nextPage === 1) {
        commit('setPosts', response.data);
      } else {
        commit('setPosts', [...state.posts, ...response.data]);
      }

      commit('setLoading', false);

      const total =
        response.headers['X-Total-Count'] || response.headers['x-total-count'];

      const totalPages = Math.ceil(total / POSTS_PER_PAGE);

      commit('setTotalPages', totalPages);

      commit('setNextPage');
    },
  },
};
