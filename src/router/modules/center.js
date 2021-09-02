/*
 * @Description:
 * @Version:
 * @Author: Linyer
 * @Date: 2021-09-02 08:58:06
 * @LastEditors: Linyer
 * @LastEditTime: 2021-09-02 09:49:50
 */
const routes = [
  {
    path: '/center/index.html',
    name: 'CenterIndex',
    component: () => import(/* webpackChunkName: "CenterIndex" */ '@/views/Center/Index.vue'),
    meta: {
      auth: true,
      title: '我的',
      keepAlive: false,
    },
  },
];
export default routes;
