import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faEnvelope, 
  faHandPeace, 
  faGrimace, 
  faFileAlt, 
  faFileCode, 
  faObjectGroup, 
  faLightbulb, 
  faQuestionCircle } 
  from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import '@/assets/sass/main.sass'

Vue.config.productionTip = false

library.add(
  faEnvelope,
  faHandPeace,
  faFileAlt,
  faFileCode,
  faObjectGroup,
  faLightbulb,
  faQuestionCircle
)

Vue.component('fa-icon', FontAwesomeIcon)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
