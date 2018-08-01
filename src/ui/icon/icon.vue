<template>
  <span
    class="c-icon">
    <span
      v-if="iconHeart"
      class="icon-heart"
    />
    <span
      v-if="iconCart"
      class="icon-cart"
    />
  </span>
</template>

<script>
export default {
  name: 'Icon',
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
