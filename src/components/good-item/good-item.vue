<template>
  <div
    class="c-good-item">
    <div
      v-if="label"
      class="c-good-item__label">
      {{ label }}
    </div>
    <a
      href="#"
      class="c-good-item__link">
      <span
        class="c-good-item__img">
        <img
          :src="imageSrc"
          alt="">
      </span>
      <span
        class="c-good-item__title">
        <span
          class="u-underline">
          {{ title }}
        </span>
      </span>
    </a>
    <span
      class="c-good-item__price">
      <span
        class="u-gray-bg">
        {{ price }}&nbsp;₴
      </span>
    </span>
    <span
      v-if="oldPrice"
      class="c-good-item__price">
      <span class="u-line-through">
        {{ oldPrice }}&nbsp;₴
      </span>
    </span>

    <ul
      class="c-goods-buttons">
      <li
        class="c-goods-buttons__item">
        <a
          :class="{'is-active': like}"
          href="#"
          class="c-heart"
          @click.prevent="$emit('click-like', id, like = !like)"
        />
      </li>
      <li class="c-goods-buttons__item">
        <a
          href="#"
          class="c-btn"
          @click.prevent="$emit('click-buy', id)">
          Buy
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GoodItem',
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
    },
    isTop: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      like: false,
      countBuy: 0
    }
  }
}
</script>

<style lang="sass">
@import 'style'
@import '../../assets/style/components/btn'
@import '../../assets/style/utilities/gray-bg'
@import '../../assets/style/utilities/line-through'
@import '../../assets/style/utilities/underline'
</style>
