<template>
  <span class="c-icon">
    <span
      v-if="iconHeart"
      class="icon-heart"></span>
    <span
      v-if="iconCart"
      class="icon-cart"></span>
  </span>
</template>

<script>
  export default {
    props: {
      iconHeart: {
        type: Boolean,
        default: false
      },
      iconCart: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="sass">
	@import "style"
</style>
