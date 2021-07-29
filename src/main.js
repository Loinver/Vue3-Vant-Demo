/*
 * @Description:
 * @Version:
 * @Author: Linyer
 * @Date: 2021-03-31 10:22:38
 * @LastEditors: Linyer
 * @LastEditTime: 2021-07-29 18:55:56
 */
import { createApp } from 'vue';
import VConsole from 'vconsole';
import 'normalize.css';
import { Toast, Dialog } from 'vant';
import 'assets/styles/index.scss';
import App from './App.vue';
import router from './router';
import store from './store/index';

if (process.env.NODE_ENV === 'production') {
  try {
    const vConsole = new VConsole();
    vConsole.setOption({ maxLogNumber: 5000 });
  } catch (e) {
    console.log(e);
  }
}

createApp(App).use(store).use(Toast).use(Dialog).use(router).mount('#app');
