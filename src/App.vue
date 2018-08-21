<template>
  <div
    class="l-site">
    <div
      class="c-body">

      <header
        class="c-header">
        <div
          class="l-container">

          <search-form/>

          <counts
            :goods-count="goodsCount"
          />

        </div>
      </header>

      <main
        class="l-main">
        <div
          class="l-container">

          <div
            class="l-goods">
            <div
              v-for="good in goods"
              :key="good.id"
              class="l-goods__item" >

              <good-item
                :good="good"
                @click-like="wishlistMap"
                @click-buy="goodsMap"
              />

            </div>
          </div>

        </div>
      </main>

    </div>

    <!-- <modal
      v-if="this.$store.state.modal.cartModal.isShown"
      state-modal-name="cartModal">
      <div
        class="c-cart">
        <div
          v-if="cartGoods.length">
          <div
            v-for="cartGood in cartGoods"
            :key="cartGood.id">

            <cart-item
              :good="cartGood"
              :count="cartGood.count"
              @click-remove="deleteGood"
              @click-change-count="recalculatePrice"
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
    </modal> -->
    <modals/>
  </div>
</template>

<script>
import SearchForm from './components/search-form/search-form.vue'
import Counts from './components/counts/counts.vue'
import GoodItem from './components/good-item/good-item.vue'
import Modals from './components/modals/Modals'
import CartItem from './components/cart-item/cart-item.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    SearchForm,
    Counts,
    GoodItem,
    Modals,
    CartItem
  },
  data () {
    return {
      likes: [],
      cartGoods: [],
      cartMap: new Map(),
      goodsCount: 0,
      totalSum: 0
    }
  },
  computed: {
    ...mapGetters({
      goods: 'goods/goods'
    })
  },
  created () {
    this.loadGoods()
  },
  methods: {
    ...mapActions({
      loadGoods: 'goods/loadGoods'
    }),
    wishlistMap (id) {
      let m = this.likesMap
      const item = this.goods.find(obj => obj.id === id)

      if (!m.has(id)) {
        m.set(id, item)
      } else {
        m.delete(id)
      }
      this.likes = [...m.values()]
    },
    goodsMap (id) {
      let m = this.cartMap
      let item = this.goods.find(obj => obj.id === id)

      if (m.has(id)) {
        m.get(id).count++
      } else {
        item.count = 1
        m.set(id, item)
      }
      this.cartGoods = [...m.values()]

      let itemsCount = 0
      let totalPrice = 0
      for (let item of m.values()) {
        itemsCount += item.count
        totalPrice += item.count * item.price
      }
      this.goodsCount = itemsCount
      this.totalSum = totalPrice
    },
    deleteGood (id) {
      let m = this.cartMap
      let item = m.get(id)

      this.totalSum -= item.count * item.price
      this.goodsCount -= item.count

      m.delete(id)
      this.cartGoods = [...m.values()]
    },
    recalculatePrice (sign, id) {
      let m = this.cartMap
      let item = m.get(id)

      if (sign === 'minus') {
        item.count--
        this.goodsCount--
        this.totalSum -= Number(item.price)
        if (item.count === 0) {
          this.deleteGood(id)
        }
      } else {
        item.count++
        this.goodsCount++
        this.totalSum += Number(item.price)
      }

      this.cartGoods = [...m.values()]
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./assets/style/layout/main"
@import "./assets/style/layout/container"
@import "./assets/style/layout/goods"

@import "./assets/style/components/main"
@import "./assets/style/components/header"
@import "./assets/style/components/btn"
@import "./assets/style/components/cart"

@import "./assets/style/animation/animation"
</style>
