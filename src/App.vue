  <!--<template>
    <div class="container text-center">
      <counter-vue></counter-vue>
      <Second-vue></Second-vue>
  <hr>
  <actions-vue > </actions-vue>
    </div>
  </template>
  <script>
  import Actions from './Actions.vue';
  import Counter from './Counter.vue';
  import SecondComponent from './SecondComponent.vue';
  export default {

  components:{
    actionsVue:Actions,
    counterVue:Counter,
    SecondVue:SecondComponent
  }
  }
  </script>
  <style>

  </style>
  -->
<!--<template>
  <div class="container text-center">
      <counterCounter :counter="counter"></counterCounter>
      <counterActions @counterUpdate="counter += $event"></counterActions>
  </div>
</template>
<script>
import Actions from './Actions.vue'
import Counter from './Counter.vue'
export default {
  data(){
    return{
      counter:0
    }
  },
  components:{
    counterActions:Actions,
    counterCounter:Counter
  }
}
</script>
<style>

</style>
-->
<template>
  <div class="container text-center">
    <div class="">
      <counterCounter></counterCounter>
      <SecondComponentvue></SecondComponentvue>
    <counterActions></counterActions>
    </div>
  </div>
</template>
<script>
import Counter from './Counter.vue'
import Actions from './Actions.vue'
import Second from './SecondComponent.vue'
export default {
  data(){
    return{
      counter:0
    }
  },
components:{
  counterCounter:Counter,
  counterActions:Actions,
  SecondComponentvue:Second
},

}
</script>
<style>

</style>
