import { createStore } from 'vuex';
import { authStoreModele, AuthStoreState } from '@/auth/auth.store';
import { postStoreModule, PostStoreState } from '@/post/post.store';
import { userStoreModule, UserStoreState } from '@/user/user.store';
import { localStorageStorePlugin } from './app.store.plugin';
import { layoutStoreModule, LayoutStoreState } from './layout/layout.store';
import {
  appNotificationStoreModule,
  AppNotificationStoreState,
} from './notification/app-notification.store';
import {
  appToolbarStoreModule,
  AppToolbarStoreState,
} from './toolbar/app-toolbar.store';
import { fileStoreModule, FileStoreState } from '../file/file.store';
import {
  commentStoreModule,
  CommentStoreState,
} from '../comment/comment.store';
import { replyStoreModule, ReplyStoreState } from '../reply/reply.store';

export interface RootState {
  appName: string;
  post: PostStoreState;
  layout: LayoutStoreState;
  auth: AuthStoreState;
  notification: AppNotificationStoreState;
  user: UserStoreState;
  toolbar: AppToolbarStoreState;
  file: FileStoreState;
  comment: CommentStoreState;
  reply: ReplyStoreState;
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
    notification: appNotificationStoreModule,
    user: userStoreModule,
    toolbar: appToolbarStoreModule,
    file: fileStoreModule,
    comment: commentStoreModule,
    reply: replyStoreModule,
  },

  plugins: [localStorageStorePlugin],
});

/**
 * 默认导出
 */
export default store;
