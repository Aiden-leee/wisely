<template>
  <div class="cart">
      <div class="cart_header">
        <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/WiselyLogo.svg" alt="wisely">
      </div>
      <div class="cart_content">
        <div class="cart_list">
            <p>장바구니가 비어있습니다<br>상품을 추가해주세요</p>
        </div>
        <div class="items">
            <template v-for="item in itemList">
                <div class="item_box" :key="item.id" @click="addCartItem">
                    <div class="item item_img">
                        <img :src=item.img :alt="item.title">
                    </div>
                    
                    <div class="item item_des" :key="item.id">
                        <div class="wrap">
                            <h3 class="item_des_title">{{item.title}}</h3>
                            <span class="item_des_info">{{item.des}}</span>
                            <div class="item_des_price"><span class="price">{{item.price}}원</span><span class="info">무료배송</span></div>
                        </div>
                        <div class="add">
                            <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/plusInCircle.svg" alt="add">
                        </div>
                    </div>
                </div>
            </template>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "cart",
    data(){
        return {
            cartList: [],
            itemList: [
                {
                    id: 1,
                    img: "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/items/starter_kit/starter_navy.png",
                    title: "면도기 세트",
                    des: "면도기 핸들+면도날 2개입",
                    price: 8900
                },
                {
                    id: 2,
                    img: "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/items/blade/refill_blade.png",
                    title: "리필 면도날",
                    des: "4입",
                    price: 9600
                },
                {
                    id: 3,
                    img: "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/items/shaving_gel/shaving_gel_150.png",
                    title: "쉐이빙젤",
                    des: "스탠다드 150ml",
                    price: 4500
                },
                {
                    id: 4,
                    img: "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/items/aftershaving/after_shaving_gel_dry_60.png",
                    title: "리페어 에프터쉐이브",
                    des: "스탠다드 60ml",
                    price: 6500
                }
            ]
        }
    },
    methods: {
        addCartItem(e){

            console.log(e.target)
        }
    }
}
</script>

<style scoped>
</style>