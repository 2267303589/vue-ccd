<template>
  <div class="lg-steps">
      <div class="lg-steps-line"></div>
      <div class="lg-step" v-for="index in count" :key="index" :style="{
          color: active>=index ? activeColor : inactiveColor
      }">
          {{index}}
      </div>
  </div>
</template>

<script>
import './step.css'
export default {
    props: {
        count: {
            type: Number,
            default: 3
        },
        active: {
            type: Number,
            default: 0
        },
        activeColor: {
            type: String,
            default: "red"
        },
        inactiveColor:  {
            type: String,
            default: "green"
        }
    },
    name: "step"
}
</script>

<style>

</style>