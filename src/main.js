import Vue from 'vue'
import App from './App.vue'

import GoodItem from './components/GoodItem.vue'

Vue.component('GoodItem', GoodItem)

new Vue({
	el: '#app',
	render: h => h(App)
})
