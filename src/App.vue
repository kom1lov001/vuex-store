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
<template>
  <div>
    <!-- <counterVue></counterVue>
    <actionsVue></actionsVue> -->
  </div>
</template>
<script>
import Actions from './Actions.vue'
import Counter from './Counter.vue'
export default{
  components:{
actionsVue:Actions,
counterVue:Counter
}
}
</script>
<style scoped></style>
