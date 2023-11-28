import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
// import storre from './store/app'

new Vue({
  el: '#app',
  // storre,
  store,
  render: h => h(App)
})


