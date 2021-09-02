/*
 * @Description:
 * @Version:
 * @Author: Linyer
 * @Date: 2021-03-31 10:22:38
 * @LastEditors: Linyer
 * @LastEditTime: 2021-09-02 10:00:46
 */
import { createApp } from 'vue';
import 'normalize.css';
import 'assets/styles/index.scss';
import App from './App.vue';
import router from './router';
import store from './store/index';
import VConsole from 'vconsole';

if (process.env.NODE_ENV === 'production') {
  try {
    const vConsole = new VConsole();
    vConsole.setOption({ maxLogNumber: 5000 });
  } catch (e) {
    console.log(e);
  }
}

import { Toast, Dialog, Button, List, Cell, Search } from 'vant';
const app = createApp(App);
// 挂载组件
app.use(Toast).use(Dialog).use(Button).use(List).use(Cell).use(Search);
// 挂载路由及状态存储
app.use(router).use(store).mount('#app');
