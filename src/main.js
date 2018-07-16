import Vue from 'vue'
import App from './App.vue'

import GoodButtons from './components/GoodButtons.vue'

Vue.component('GoodButtons', GoodButtons)

new Vue({
	el: '#app',
	render: h => h(App)
})
