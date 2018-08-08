import Vue from 'vue'
import Vuex from 'vuex'
import ModalStore from './modules/modal/Modal'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    modal: {
      ...ModalStore
    }
  }
})
