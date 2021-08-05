<!--
 * @Description:
 * @Version:
 * @Author: Linyer
 * @Date: 2021-04-14 13:32:37
 * @LastEditors: Linyer
 * @LastEditTime: 2021-08-05 09:38:28
-->
<template>
  <div>
    <van-button :to="{ name: 'Index' }">我是b页面</van-button>
  </div>
</template>
<script>
// import { ref } from 'vue';
export default {
  data() {
    return {};
  },
  computed: {},
  created() {
    this.$dialog({ title: '测试' }).then((res) => {
      console.log(res);
    });
  },
  methods: {},
};
</script>
