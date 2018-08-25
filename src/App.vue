<template>
  <div class="l-site">
    <div class="c-body">

      <header class="c-header">
        <div class="l-container">
          <search-form/>
          <counts/>
        </div>
      </header>

      <main class="l-main">
        <div class="l-container">

          <div class="l-goods">
            <div
              v-for="(good, index) in goods"
              :key="index"
              class="l-goods__item" >

              <good-item
                :good="good"
              />

            </div>
          </div>

        </div>
      </main>

    </div>

    <like-modal/>
    <cart-modal/>
  </div>
</template>

<script>
import SearchForm from './components/search-form/SearchForm.vue'
import Counts from './components/counts/Counts.vue'
import GoodItem from './components/good-item/GoodItem.vue'
import LikeModal from './components/modals/LikeModal'
import CartModal from './components/modals/CartModal'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    SearchForm,
    Counts,
    GoodItem,
    LikeModal,
    CartModal
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
    })
  }
}
</script>

<style lang="sass" scoped>
@import './assets/style/layout/main'
@import './assets/style/layout/container'
@import './assets/style/layout/goods'

@import './assets/style/components/main'
@import './assets/style/components/header'
@import './assets/style/components/btn'

@import './assets/style/animation/animation'
</style>
