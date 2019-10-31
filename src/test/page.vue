<template>
  <div class="page">
    <!-- 头 -->
    <p></p>
    <!-- 内容 -->
    <div>
      <!-- 默认插槽 -->
      <slot name="content"></slot>
    </div>
    <!-- 尾 -->
    <p>
      <slot name="footer"></slot>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pageName: '组件内部数据'
    }
  }
}
</script>

<style scoped lang='less'></style>
