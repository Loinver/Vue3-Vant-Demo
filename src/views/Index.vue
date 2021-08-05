<!--
 * @Description:
 * @Version:
 * @Author: Linyer
 * @Date: 2021-02-23 10:27:42
 * @LastEditors: Linyer
 * @LastEditTime: 2021-08-05 09:14:33
-->
<template>
  <div>
    <van-button :to="{ name: 'CenterIndex' }" type="primary" block>跳转去B页面</van-button>
  </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
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
