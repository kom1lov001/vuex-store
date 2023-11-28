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
<!--<template>
  <div>
    <h1>
      Counter:{{ counter }}
    </h1>
  </div>


</template>
<script>
export default{
  props:['counter']
// data(){
//   return{
//     counter:0
//   }

// }
}
</script>
<style scoped></style>
-->
<template>
  <div class="text-center mt-5">
<h2>Counter: {{ counter }}</h2>
  </div>
</template>
<script>
export default {
// computed:{
//   counter(){
//     return this.$store.getters.computedCounter
//   }
// }
computed:{
  counter(){
    return this.$store.getters.computedCounter
  }
}
}
</script>
<style>

</style>
