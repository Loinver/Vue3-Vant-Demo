<!--
 * @Description:
 * @Version:
 * @Author: Linyer
 * @Date: 2021-08-05 09:50:47
 * @LastEditors: Linyer
 * @LastEditTime: 2021-09-02 10:09:00
-->
<template lang="">
  <div class="">{{ userInfo.name }}</div>
</template>
<script>
import { defineComponent } from 'vue';
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
    console.log(props.userInfo);

    return {};
  },
});
</script>
<style lang="scss" scoped></style>
