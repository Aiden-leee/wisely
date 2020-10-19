<template>
  <div id="app">
    <Cart />
    <ShaveModal :class="{active: isModal}"/>
  </div>
</template>

<script>
import Cart from './components/Cart.vue';
import ShaveModal from './components/ShaveModal';
export default {
  name: 'App',
  components: {
    Cart,
    ShaveModal
  },
  computed: {
    isModal(){
      return this.$store.state.shave_modal
    }
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
  height: 100vh;
  background: #fff;
}
</style>
