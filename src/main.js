import Vue from 'vue'
import App from './App.vue'

import Counts from './components/Counts.vue'
import GoodItem from './components/GoodItem.vue'
import CartItem from './components/CartItem.vue'
import WishlistItem from './components/WishlistItem.vue'

Vue.component('Counts', Counts)
Vue.component('GoodItem', GoodItem)
Vue.component('CartItem', CartItem)
Vue.component('WishlistItem', WishlistItem)

new Vue({
	el: '#app',
	render: h => h(App)
})
