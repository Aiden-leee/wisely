<template>
  <div id="app">
      <ShaveModal :class="{active: isModal}"/>
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
  </div>
</template>

<script>
import ShaveModal from './components/ShaveModal';
export default {
  name: 'App',
  components: {
    ShaveModal,
  },
  created(){
      let cart = JSON.parse(localStorage.getItem('cart'));
      if( cart !== null){
        this.$store.commit("loadCart", cart)
      }
      // 총 금액
      let price = 0;
      this.$store.state.cart.forEach(item=>{
          price += item.price * item.quantity;
      })
      this.$store.commit('totalPrice', price)
      // 총 개수
      let count = 0;
      this.$store.state.cart.forEach(item=>{
          count += item.quantity
      })
      this.$store.commit("totalCount", count)
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
