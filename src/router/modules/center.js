const routes = [
  {
    path: '/center/index.html',
    name: 'CenterIndex',
    component: () => import(/* webpackChunkName: "CenterIndex" */ '@/views/center/Index.vue'),
    meta: {
      auth: true,
      title: '我的',
      keepAlive: false,
    },
  },
];
export default routes;
