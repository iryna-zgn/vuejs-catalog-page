<template>
  <div
    class="c-counts">
    <div
      class="c-counts__item"
      @click="showLikesModal">
      <icon
        :icon-heart="true"
      />
      <span
        v-if="likesCount">
        {{ likesCount }}
      </span>
    </div>
    <div
      class="c-counts__item"
      @click="showCartModal">
      <icon
        :icon-cart="true"
      />
      <span
        v-if="goodsCount">
        {{ goodsCount }}
      </span>
    </div>
  </div>
</template>

<script>
import Icon from '../../ui/icon/icon'
export default {
  name: 'Counts',
  components: {
    Icon
  },
  props: {
    likesCount: {
      type: Number,
      default: 0
    },
    goodsCount: {
      type: Number,
      default: 0
    }
  },
  methods: {
    showLikesModal () {
      this.$store.state.modal.likesModal.isShown = true
    },
    showCartModal () {
      this.$store.state.modal.cartModal.isShown = true
    }
  }
}
</script>

<style lang="sass">
@import "style"
</style>
