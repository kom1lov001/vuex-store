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
<template>
  <div>
    <button @click="addtocount">add to count</button>
    <button @click="taketocount">take to count</button>
  </div>
</template>
<script>
export default{
data(){
  return{

  }
}
}
</script>
