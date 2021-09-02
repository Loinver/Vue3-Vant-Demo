<!--
 * @Description: 详情
 * @Version:
 * @Author: Linyer
 * @Date: 2021-02-23 10:27:42
 * @LastEditors: Linyer
 * @LastEditTime: 2021-09-02 11:48:57
-->
<template>
  <div class="container">
    <l-header class="header" :user-Info="userInfo"></l-header>
    <l-search class="search" :user-Info="userInfo"></l-search>
    <div class="content">
      <van-list v-model:loading="list.loading" :finished="list.finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="item in list.data" :key="item" :title="item" />
      </van-list>
    </div>
  </div>
</template>
<script>
import { reactive, defineComponent } from 'vue';
import LHeader from './components/l-header.vue';
import LSearch from './components/l-search.vue';

export default defineComponent({
  components: { LHeader, LSearch },
  setup() {
    const userInfo = reactive({
      name: '张三',
      sex: '男',
      age: 12,
    });
    const list = reactive({
      data: [],
      loading: false,
      finished: false,
    });

    const onLoad = () => {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        console.log('加载了');
        for (let i = 0; i < 10; i++) {
          list.data.push(list.data.length + 1);
        }

        // 加载状态结束
        list.loading = false;

        // 数据全部加载完成
        if (list.data.length >= 40) {
          list.finished = true;
        }
      }, 1000);
    };
    return { list, onLoad, userInfo };
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
});
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .header {
    flex-shrink: 0;
  }
  .search {
    flex-shrink: 0;
  }
  .content {
    overflow-y: scroll;
    flex-grow: 1;
  }
}
</style>
