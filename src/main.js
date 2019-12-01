import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js'

Vue.config.productionTip = false

import 'normalize.css'

import Vuetify from 'vuetify'
Vue.use(Vuetify)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
