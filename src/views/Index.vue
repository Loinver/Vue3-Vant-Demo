<!--
 * @Description:
 * @Version:
 * @Author: Linyer
 * @Date: 2021-02-23 10:27:42
 * @LastEditors: Linyer
 * @LastEditTime: 2021-08-04 11:28:00
-->
<template>
  <div>
    1111
    <router-link :to="{ name: 'CenterIndex' }">跳转去B页面</router-link>
    <van-button type="primary" block>跳转去B页面</van-button>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import { Button } from 'vant';

export default defineComponent({
  components: {
    [Button.name]: Button,
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {
    this.$toast(111);
  },
  methods: {},
});
</script>
