<template>
  <div class="wrapper">
    <p>this is my wrappers hi brother</p>
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
    display: flex;
    flex-direction: column;
    & p {
      color: red;
      font-size: 30px;
    }
  }
</style>
