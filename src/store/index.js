// import Vue from "vue"
// import Vuex from "vuex"
// Vue.use(Vuex)
// export default new Vuex.Store({
// state:{
//   counter:1
// },
// mutations:{
// changeCounter(state,payload){
//   state.counter += payload
// }
// },
// getters:{
//   computedCounter(state){
//     return state.counter * (10)
//   }
// }
// state:{
//   counter:0
// },
// getters:{
// counterCounter(state){
//   return state.counter
// }
// },
// mutations:{
//   counterUpdated(state ,payload){
//     state.counter += payload
//   }
// },
// actions:{

// }
// })
import  Vue  from "vue";
import Vuex from 'Vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    counter:0
  },
  mutations:{
    changeCounter(state){
return state.counter += 1
    }
  },
  getters:{
    computedCounter(state){
      return state.counter * 11
    }
  }
// state:{
//   counter:0
// },
// getters:{
//   computedCounter(state){
// return state.counter * 11
//   }
// }
})
