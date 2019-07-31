import Vue from 'vue'
import App from './App.vue'

// vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import {routes} from './route.js'
export const router = new VueRouter({
  routes:routes,
  mode:'history',
})

// vuex
import {store} from './store/store.js'

// self-defined components
import Btn from './common/Button.vue'
Vue.component('v-button',Btn)
import LineBreak from './common/LineBreak.vue'
Vue.component('line-break', LineBreak)


// picture swiper
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

// font-awesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faShoppingCart, faBars, faFan, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faSearch, faShoppingCart, faBars, faFan, faTimes)
Vue.component('font-awesome-icon', FontAwesomeIcon)






new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
