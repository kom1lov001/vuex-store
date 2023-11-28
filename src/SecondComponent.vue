<!--<template>
  <div>
    <h1>Second Counter:{{ counter }}</h1>
  </div>
</template>
<script>
export default {
computed:{
  counter(){
  return this.$store.state.counter
  }
}
}
</script>
<style>

</style>
-->
<template>
  <div>
    <h2>Second: {{ counter }}</h2>
  </div>
</template>
<script>
export default{
  // computed:{
  //   counters(){
  //     return this.$store.getters.computedCounter
  //   }
  // }
computed:{
 counter(){
    return this.$store.getters.computedCounter
  },
  // num(){
  //   return this.$storre.state.num
  // }
}
}
</script>
<style scoped></style>
