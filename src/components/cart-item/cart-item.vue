<template>
  <div
    class="c-cart-item">
    <div
      class="c-cart-item__const">
      <a
        href="#">
        <img
          :src="good.imageSrc"
          alt="">
      </a>
    </div>
    <div
      class="c-cart-item__var">
      <div
        class="c-cart-item__title">
        <a
          href="#"
          class="u-underline">
          {{ good.title }}
        </a>
      </div>

      <div
        class="c-spinner">
        <a
          href="#"
          class="c-spinner__btn"
          @click.prevent="$emit('click-change-count', 'minus', good.id)">
          -
        </a>
        <span
          class="c-spinner__value">
          {{ good.count }}
        </span>
        <a
          href="#"
          class="c-spinner__btn"
          @click.prevent="$emit('click-change-count', 'plus', good.id)">
          +
        </a>
      </div>

      <div>
        {{ count }}
        <span
          class="u-gray">
          &times;
        </span>
        {{ good.price }}&nbsp;₴
        <span
          class="u-gray">
          =
        </span>
        {{ count * good.price }}&nbsp;₴
      </div>

    </div>
    <div
      class="c-cart-item__remove"
      @click="$emit('click-remove', good.id)">
      &times;
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    good: {
      type: Object,
      default: _ => {}
    },
    count: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="sass">
@import "style"
@import "../../assets/style/utilities/gray"
</style>
