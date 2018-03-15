<template>
  <div class="page__bd-loading center">
    <div class="loading center">
      <cube-loading :size="28"></cube-loading>正在加载
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.page__bd-loading {
  height: 99vh;
}
.loading {
  width: 100px;
  height: 50px;
  background-color: rgba(37, 38, 45, 0.9);
  color: rgb(204, 204, 204);
}
</style>
