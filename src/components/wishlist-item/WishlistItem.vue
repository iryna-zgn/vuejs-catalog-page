<template>
  <div
    class="c-wishlist-item">
    <a
      href="#"
      class="c-wishlist-item__link">
      <span
        class="c-wishlist-item__img">
        <img
          :src="good.imageSrc"
          alt="">
      </span>
      <span
        class="c-wishlist-item__title">
        <span
          class="u-underline">
          {{ good.title }}
        </span>
      </span>
    </a>
    <div
      class="c-wishlist-item__price">
      <span
        class="u-gray-bg">
        {{ good.price }}&nbsp;₴
      </span>
    </div>
    <div
      v-if="good.oldPrice"
      class="c-wishlist-item__old-price">
      <span
        class="u-line-through">
        {{ good.oldPrice }}&nbsp;₴
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WishlistItem',
  props: {
    good: {
      type: Object,
      default: _ => {}
    }
  }
}
</script>

<style lang="sass">
@import 'style'
</style>
