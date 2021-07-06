<template>
  <div>
      <step :active="active" :count="count"></step>
      <button @click="next">next</button>
  </div>
</template>

<script>
import Step from './Step'
export default {
    data(){
        return{
            count: 4,
            active: 0
        }
    },
  components: { Step },
  methods: {
      next () {
          this.active++
      }
  }
}
</script>

<style>

</style>