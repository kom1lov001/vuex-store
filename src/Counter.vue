<!--<template>
  <div>
    <h1>Counter:{{ counter }}</h1>
  </div>
</template>
<script>
export default {
// computed:{
  // counter(){
  //   return this.$store.state.counter
  // }
// }
// props:['counter']
// computed:{
//   counter(){
    // return this.$store.getters.computedCounter
//   }
// }
computed:{
  counter(){
return this.$store.getters.counterCounter
  }
}
}

</script>
<style>

</style>
-->
<template>
  <div>
    <h1>
      Counter:{{ counter }}
    </h1>
  </div>


</template>
<script>
export default{
data(){
  return{
    counter:0
  }

}
}
</script>
<style scoped></style>
