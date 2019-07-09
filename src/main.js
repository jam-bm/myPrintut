import Vue from 'vue'
import App from './App.vue'
import '@/assets/style.css'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
import VueDraggableResizable from 'vue-draggable-resizable'
Vue.component('vue-draggable-resizable', VueDraggableResizable)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
