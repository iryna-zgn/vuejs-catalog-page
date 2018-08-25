<template>
  <modal
    v-if="this.$store.state.modal.cartModal.isShown"
    state-modal-name="cartModal">
    <div
      class="c-cart">
      <div
        v-if="cartGoods.length > 0">
        <div
          v-for="(cartGood, index) in cartGoods"
          :key="index">

          <cart-item
            :good="cartGood"
            :count="goodsCount"
          />

        </div>
        <div
          class="c-cart__sum">
          {{ totalSum }}&nbsp;₴
        </div>
      </div>
      <div
        v-if="cartGoods.length === 0"
        class="c-message">
        Cart is empty
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from '../../ui/modal/modal.vue'
import CartItem from '../../components/cart-item/CartItem'
import { mapGetters } from 'vuex'
export default {
  name: 'CartModal',
  components: {
    Modal,
    CartItem
  },
  computed: {
    ...mapGetters({
      cartGoods: 'goods/cartGoods',
      goodsCount: 'goods/goodsCount',
      totalSum: 'goods/totalSum'
    })
  }
}
</script>

<style lang="sass">
@import '../../assets/style/components/message'
@import '../../assets/style/components/cart'
</style>
