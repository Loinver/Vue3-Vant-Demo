<!--
 * @Description:
 * @Version:
 * @Author: Linyer
 * @Date: 2021-08-05 09:50:47
 * @LastEditors: Linyer
 * @LastEditTime: 2021-09-26 11:31:46
-->
<template lang="">
  <div>
    <van-search
      v-model="searchKey.keywords"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    />
  </div>
</template>

<script>
import { reactive, defineComponent, inject } from 'vue';
export default defineComponent({
  setup(props) {
    const userInfo = inject('userInfo');
    console.log('[ props ]', props, userInfo);
    const searchKey = reactive({
      keywords: '',
      name: userInfo.name,
    });
    return {
      searchKey,
      userInfo,
    };
  },
  methods: {
    onSearch(val) {
      console.log(val);
    },
    onCancel(val) {
      console.log(val);
    },
  },
});
</script>
<style lang="scss" scoped></style>
