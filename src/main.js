import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import ScrollAnimation from './directives/scrollAnimation'

Vue.config.productionTip = false
Vue.directive('scrollanimation', ScrollAnimation);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
