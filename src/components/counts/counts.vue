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
        v-if="likes.length > 0">
        {{ likes.length }}
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
import { mapGetters } from 'vuex'
export default {
  name: 'Counts',
  components: {
    Icon
  },
  props: {
    goodsCount: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapGetters({
      likes: 'goods/likes'
    })
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
