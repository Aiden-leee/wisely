<template>
    <div class="selected_item_box" :key="item.id" >
        <div class="selected_item item_img">
            <img :src=item.img :alt="item.title">
        </div>

        <div class="selected_item item_des">
            <div class="wrap">
                <h3 class="item_des_title">{{item.title}}</h3>
                <span class="item_des_info">{{item.des}}</span>
                <div class="item_des_price"><span class="price">{{item.price.toLocaleString()}}원</span></div>
            </div>
            <div class="selected_quantity">
                <div class="cancel" @click="removeItem(item)">
                    <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/smallXmark.svg" alt="x">
                </div>
                <div class="quantity_wrap">
                    <span class="btn minus" @click="quantityDecrement(item)"><span class="minus_icon"></span></span>
                    <span class="quantity">{{quantityValue}}</span>
                    <span class="btn plus" @click="quantityIncrement(item)"><span class="plus_icon"></span></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CartItem",
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    data(){
        return {
            quantityValue: 1,
        }
    },
    computed:{
    },
    methods: {
        removeItem(item){
            this.$store.commit("revertItem", item);
            this.$store.commit("removeCart", item);
            if(this.$store.state.cart.length < 1 ){
                this.$store.commit('totalPrice', 0)
            }
        },
        quantityDecrement(item){
            if( this.quantityValue <= 1 ){
                return
            }
            this.quantityValue--;
            this.$store.commit("minusQuantity", [item, this.quantityValue])
        },
        quantityIncrement(item){
            this.quantityValue++;
            this.$store.commit("plusQuantity", [item, this.quantityValue])
        }
    },
    mounted(){
    },
}
</script>

<style>

</style>