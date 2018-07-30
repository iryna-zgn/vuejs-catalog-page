<template>
  <div
    class="c-wishlist-item">
    <a
      href="#"
      class="c-wishlist-item__link">
      <span
        class="c-wishlist-item__img">
        <img
          :src="imageSrc"
          alt="">
      </span>
      <span
        class="c-wishlist-item__title">
        <span
          class="u-underline">
          {{ title }}
        </span>
      </span>
    </a>
    <div
      class="c-wishlist-item__price">
      <span
        class="u-gray-bg">
        {{ price }}&nbsp;₴
      </span>
    </div>
    <div
      v-if="oldPrice"
      class="c-wishlist-item__old-price">
      <span
        class="u-line-through">
        {{ oldPrice }}&nbsp;₴
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: null
    },
    title: {
      type: String,
      default: ''
    },
    price: {
      type: [Number, String],
      default: null
    },
    oldPrice: {
      type: [Number, String],
      default: null
    },
    imageSrc: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="sass">
@import 'style'
</style>
