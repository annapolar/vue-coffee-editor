import Vue from 'vue'
import App from './App.vue'
import CoffeeEditor from './components/CoffeeEditor.vue'

Vue.config.productionTip = false

Vue.component("CoffeeEditor", CoffeeEditor) 

new Vue({
  render: h => h(App),
}).$mount('#app')
