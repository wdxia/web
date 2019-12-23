<template>
  <div class="wrapper">
    <p>this is my wrapper</p>
    <img src="./assets/color.png" alt="color">
  </div>
</template>

<script>
export default {
  name: 'APP'
}
</script>

<style lang="scss">
  .wrapper {
    color: #ffffff;
    & p {
      color: red;
    }
  }
</style>
