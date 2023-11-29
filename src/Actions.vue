<!--<template>
  <div>
  <button class="btn btn-success" @click="changeOnClick(1)">Incrediment</button>
  <button class="btn btn-danger" @click="changeOnClick(-1)">Decridiment</button>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
methods: {
  // changeOnClick(val){
  //   // this.$emit('updateCounter',val)
  //   // this.$emit("changenewValue",val)
  //   // this.$store.state.counter += val
  //   // this.$store.state.counter += val;
  //   // this.$store.state.counter += val
  //   this.$store.commit('changeCounter',val)
  // }
changeOnClick(val){
// this.$store.state.counter += val
this.$store.commit('counterUpdated',val)
}
}
}
</script>
<style>

</style>
-->
<!--<template>
  <div>
    <button class="btn btn-info" @click="updateCounter(1) ">add to count</button>
    <button class="btn btn-danger" @click="updateCounter(-1)">take to count</button>
  </div>
</template>
<script>
export default{
data(){
},
methods:{
  updateCounter(bool){
   this.$emit("counterUpdate",bool)
  }
}
}
</script>
-->
<template>
  <div class="align-center d-flex justify-content-center mt-5 ">
<button class="btn btn-success mr-3" @click="updateCounter(1)">success</button>
<button class="btn btn-danger" @click="updateCounter(-1)">Danger</button>
  </div>
</template>
<script>
export default {
// methods:{
//   updateCounter(count){
//     this.$store.state.counter += count
//   }
// }
methods:{
  updateCounter(value){
    // this.$store.state.counter += value
    this.$store.commit('changeCounter',value)
  }
}
}
</script>
<style>

</style>
