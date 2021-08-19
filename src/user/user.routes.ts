import { RouteRecordRaw } from 'vue-router';
import UserShow from './show/user-show.vue';
import UserPosts from './show/components/user-posts.vue';
import UserLiked from './show/components/user-liked.vue';
import UserComments from './show/components/user-comments.vue';
import UserReplies from './show/components/user-replies.vue';

/**
 * 定义路由
 */
const routes: Array<RouteRecordRaw> = [
  {
    name: 'userShow',
    path: '/users/:userId',
    component: UserShow,
    props: true,
    children: [
      {
        name: 'userPosts',
        path: '',
        component: UserPosts,
      },
      {
        name: 'userLiked',
        path: 'liked',
        component: UserLiked,
      },
      {
        name: 'userComments',
        path: 'comments',
        component: UserComments,
      },
      {
        name: 'userReplies',
        path: 'replies',
        component: UserReplies,
      },
    ],
  },
];

/**
 * 默认导出
 */
export default routes;
