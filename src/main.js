import Vue from 'vue'
import App from './App.vue'

import GoodItem from './components/GoodItem.vue'
import CartItem from './components/CartItem.vue'

Vue.component('GoodItem', GoodItem)
Vue.component('CartItem', CartItem)

new Vue({
	el: '#app',
	render: h => h(App)
})
