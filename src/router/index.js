/*
 * @Description:
 * @Version:
 * @Author: Linyer
 * @Date: 2021-03-31 10:27:05
 * @LastEditors: Linyer
 * @LastEditTime: 2021-07-29 14:25:54
 */
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/index.html',
  },
  {
    path: '/index.html',
    name: 'Index',
    component: () => import(/* webpackChunkName: "index" */ '@/views/Index.vue'),
    meta: {
      auth: false,
      title: '首页',
      keepAlive: true,
    },
  },
  {
    // 匹配所有路径  vue2使用*   vue3使用/:pathMatch(.*)*或/:pathMatch(.*)或/:catchAll(.*)
    path: '/:pathMatch(.*)*',
    name: '404',
    redirect: '/index.html',
  },
];
const modulesFiles = require.context('./modules', true, /\.js$/);
// 自动引入module包
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleRouter = modulesFiles(modulePath);
  modules = modules.concat(moduleRouter.default);
  return modules;
}, []);
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes.concat(modules),
});

router.beforeEach((to, from, next) => {
  next();
});

router.afterEach((to) => {
  // 从路由的元信息中获取 title 属性
  if (to.meta.title) {
    // 针对于ios App 单独设置页面标题
    document.title = to.meta.title;
    // 如果是 iOS 微信设备，则使用如下 hack 的写法实现页面标题的更新
    if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
      const i = document.createElement('iframe');
      i.src = '/favicon.ico';
      i.style.display = 'none';
      i.onload = () => {
        setTimeout(() => {
          i.remove();
        }, 10);
      };
      document.body.appendChild(i);
    }
  }
});
export default router;
