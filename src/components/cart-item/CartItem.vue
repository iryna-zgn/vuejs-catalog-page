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
          @click="setRecalculateInfo([good.id, 'minus'])">
          -
        </a>
        <span
          class="c-spinner__value">
          {{ good.count }}
        </span>
        <a
          href="#"
          class="c-spinner__btn"
          @click="setRecalculateInfo([good.id, 'plus'])">
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
      @click="setDeleteId(good.id)">
      &times;
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
  },
  methods: {
    ...mapActions({
      setDeleteId: 'goods/setDeleteId',
      setRecalculateInfo: 'goods/setRecalculateInfo'
    })
  }
}
</script>

<style lang="sass">
@import "style"
@import "../../assets/style/utilities/gray"
</style>
