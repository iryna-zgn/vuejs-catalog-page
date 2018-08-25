<template>
  <div
    class="c-good-item">
    <div
      v-if="good.label"
      class="c-good-item__label">
      {{ good.label }}
    </div>
    <a
      href="#"
      class="c-good-item__link">
      <span
        class="c-good-item__img">
        <img
          :src="good.imageSrc"
          alt="">
      </span>
      <span
        class="c-good-item__title">
        <span
          class="u-underline">
          {{ good.title }}
        </span>
      </span>
    </a>
    <span
      class="c-good-item__price">
      <span
        class="u-gray-bg">
        {{ good.price }}&nbsp;₴
      </span>
    </span>
    <span
      v-if="good.oldPrice"
      class="c-good-item__price">
      <span class="u-line-through">
        {{ good.oldPrice }}&nbsp;₴
      </span>
    </span>

    <ul
      class="c-goods-buttons">
      <li
        class="c-goods-buttons__item">
        <a
          :class="{'is-active': isLike}"
          href="#"
          class="c-heart"
          @click.prevent="setLikeId(good.id)"
        />
      </li>
      <li class="c-goods-buttons__item">
        <a
          href="#"
          class="c-btn"
          @click.prevent="setCartGoodId(good.id)">
          Buy
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'GoodItem',
  props: {
    good: {
      type: Object,
      default: _ => {}
    }
  },
  computed: {
    ...mapGetters({
      likes: 'goods/likes',
      cartGoods: 'goods/cartGoods'
    }),
    isLike () {
      if (this.likes.find(obj => obj.id === this.good.id)) {
        return true
      }
    }
  },
  methods: {
    ...mapActions({
      setLikeId: 'goods/setLikeId',
      setCartGoodId: 'goods/setCartGoodId'
    })
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
