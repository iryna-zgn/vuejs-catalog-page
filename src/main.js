import Vue from 'vue'
import App from './App.vue'

import Counts from './components/counts/counts.vue'
import GoodItem from './components/good-item/good-item.vue'
import CartItem from './components/cart-item/cart-item.vue'
import WishlistItem from './components/wishlist-item/wishlist-item.vue'
import Icon from './components/icon/icon.vue'
import SearchForm from './components/search-form/search-form.vue'
import Modal from './components/modal/modal.vue'

Vue.component('Counts', Counts)
Vue.component('GoodItem', GoodItem)
Vue.component('CartItem', CartItem)
Vue.component('WishlistItem', WishlistItem)
Vue.component('Icon', Icon)
Vue.component('SearchForm', SearchForm)
Vue.component('Modal', Modal)

new Vue({
	el: '#app',
	render: h => h(App)
})
