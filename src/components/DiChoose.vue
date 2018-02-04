<template>
  <div>
    <cube-button :active="true">
      <slot name="button"></slot>
    </cube-button>
    <div class="chooseIcon">
      <slot name="firstIcon"></slot>
      <slot name="secondIcon"></slot>
      <slot name="thirdIcon"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.chooseIcon
  display flex
  align-items center
  justify-content space-around
</style>
