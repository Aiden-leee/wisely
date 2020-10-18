<template>
  <div id="app">
    <Cart />
  </div>
</template>

<script>
import Cart from './components/Cart.vue'

export default {
  name: 'App',
  components: {
    Cart
  }
}
</script>

<style>
* { font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif'; }
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3a3a3a;
  margin: 0 auto;
  min-width: 360px;
  max-width: 414px;
  height: 100vh;
  background: #fff;
}
</style>
