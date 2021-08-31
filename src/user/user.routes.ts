import { RouteRecordRaw } from 'vue-router';
import UserShow from './show/user-show.vue';
import UserPosts from './show/components/user-posts.vue';
import UserLiked from './show/components/user-liked.vue';
import UserComments from './show/components/user-comments.vue';
import UserReplies from './show/components/user-replies.vue';
import userAccount from './account/user-account.vue';

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
        props: route => {
          return {
            sort: 'latest',
            filter: {
              user: route.params.userId,
              action: 'published',
            },
          };
        },
      },
      {
        name: 'userLiked',
        path: 'liked',
        component: UserLiked,
        props: route => {
          return {
            sort: 'latest',
            filter: {
              user: route.params.userId,
              action: 'liked',
            },
          };
        },
      },
      {
        name: 'userComments',
        path: 'comments',
        component: UserComments,
        props: route => {
          return {
            filter: {
              user: route.params.userId,
              action: 'published',
            },
          };
        },
      },
      {
        name: 'userReplies',
        path: 'replies',
        component: UserReplies,
      },
      {
        name: 'userAccount',
        path: 'account',
        component: userAccount,
      },
    ],
  },
];

/**
 * 默认导出
 */
export default routes;
