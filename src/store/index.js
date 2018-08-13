import Vue from 'vue'
import Vuex from 'vuex'
import ModalStore from './modules/modal/Modal'
import Wishlist from './modules/wishlist/Wishlist'
import Goods from './modules/goods/Goods'
import Search from './modules/search/Search'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    modal: {
      ...ModalStore
    },
    wishlist: {
      ...Wishlist
    },
    goods: {
      ...Goods
    },
    search: {
      ...Search
    }
  }
})
