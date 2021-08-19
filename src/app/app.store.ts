import { createStore } from 'vuex';
import { authStoreModele, AuthStoreState } from '../auth/auth.store';
import { postStoreModule, PostStoreState } from '../post/post.store';
import { localStorageStorePlugin } from './app.store.plugin';
import { layoutStoreModule, LayoutStoreState } from './layout/layout.store';

export interface RootState {
  appName: string;
  post: PostStoreState;
  layout: LayoutStoreState;
  auth: AuthStoreState;
}

/**
 * 创建 Store
 */
const store = createStore({
  state: {
    appName: '宁皓网',
  } as RootState,

  modules: {
    post: postStoreModule,
    layout: layoutStoreModule,
    auth: authStoreModele,
  },

  plugins: [localStorageStorePlugin],
});

/**
 * 默认导出
 */
export default store;
