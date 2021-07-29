<!--
 * @Description:
 * @Version:
 * @Author: Linyer
 * @Date: 2021-02-23 10:27:42
 * @LastEditors: Linyer
 * @LastEditTime: 2021-07-29 14:33:03
-->
<template>
  <div>
    1111
    <router-link :to="{ name: 'CenterIndex' }">跳转去B页面</router-link>
  </div>
</template>
<script>
import { createApp } from 'vue';
const app = createApp();
import { Button } from 'vant';

app.use(Button);
export default {
  data() {
    return {};
  },
  computed: {},
  mounted() {
    this.$toast(111);
  },
  methods: {},
};
</script>
