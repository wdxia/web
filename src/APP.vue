<template>
<div id="app">
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'APP'
}
</script>

<style lang="scss">
#app {
  width: 100%;
  overflow: hidden;
  height: 100%;
  min-height: 100vh;
  border: 1px solid blue;
}
</style>
