<template>
    <div class="cycle">
        <div class="cart_header">
            <div class="left">
                <img src="@/assets/img/logo.svg" alt="wisely">
            </div>
            <div class="right">
                <div class="currentCart" @click="currentViewCart">
                    <div class="cart_icon" :class="{hasItem:isTotalCount}"><span class="count">{{isTotalCount}}</span></div>
                    <div class="currentPrice" :class="{active: currentCartActive}"><span v-if="this.$store.state.total_price !== 0">₩{{this.$store.state.total_price}}</span></div>
                </div>
            </div>
        </div>
        <div class="cycle_content">
            <div class="cycle_title">배송 주기를 선택해주세요</div>
            <div class="cycle_list">
                <div class="item_cycle">

                </div>
            </div>
            <div class="cycle_info_bottom">
                <div class="next_step_btn">
                    <button></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Cycle",
    data(){
        return {
            currentCartActive: false, 
        }
    },
    computed: {
        isTotalCount(){
            console.log( this.$store.state.total_count >= 1 ? this.$store.state.total_count : "" )
            return this.$store.state.total_count >= 1 ? this.$store.state.total_count : ""; 
        }
    },
    methods: {
        currentViewCart(e){
            this.$store.state.total_count === 0 ? this.$router.push("/") : '';
            this.currentCartActive = !this.currentCartActive; 
        }
    }
}
</script>

<style>

</style>