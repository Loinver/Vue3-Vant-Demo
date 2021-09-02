<!--
 * @Description:
 * @Version:
 * @Author: Linyer
 * @Date: 2021-08-05 09:50:47
 * @LastEditors: Linyer
 * @LastEditTime: 2021-09-02 13:42:07
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
    <van-button @click="handleAdd">年龄加1</van-button>
    <div>oldAge{{ userInfo.age }}</div>
    <div>newAge{{ searchKey.newAge }}</div>
  </div>
</template>

<script>
import { reactive, defineComponent, toRefs } from 'vue';
export default defineComponent({
  props: {
    userInfo: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  setup(props) {
    const { name, age } = toRefs(props);
    console.log(name);
    const searchKey = reactive({
      keywords: '',
      newAge: '',
    });
    const handleAdd = () => {
      age += 1;
    };
    return {
      searchKey,
      handleAdd,
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
