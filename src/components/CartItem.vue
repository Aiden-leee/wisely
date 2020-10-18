<template>
    <div class="selected_item_box" :key="item.id" >
        <div class="selected_item item_img">
            <img :src=item.img :alt="item.title">
        </div>

        <div class="selected_item item_des" :key="item.id">
            <div class="wrap">
                <h3 class="item_des_title">{{item.title}}</h3>
                <span class="item_des_info">{{item.des}}</span>
                <div class="item_des_price"><span class="price">{{item.price}}원</span></div>
            </div>
            <div class="selected_quantity">
                <div class="cancel">
                    <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/smallXmark.svg" alt="x">
                </div>
                <div class="quantity_wrap">
                    <span class="btn minus" @click="quantityDecrement"><span class="minus_icon"></span></span>
                    <span class="quantity">1</span>
                    <span class="btn plus" @click="quantityIncrement"><span class="plus_icon"></span></span>
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
            
        }
    },
    methods: {
        addCartItem(item){
            this.$store.commit("addCart", item)
            this.$store.commit("updateItems", item)
            
        },
        quantityDecrement(){

        },
        quantityIncrement(){

        }

    }
}
</script>

<style>

</style>