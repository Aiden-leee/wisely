import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state : {
        total_count: 0,
        total_price: 0,
        cart: [],
        shave_modal: false,
        items: [
            {
                id: 1,
                img: "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/items/starter_kit/starter_navy.png",
                title: "면도기 세트",
                des: "면도기 핸들+면도날 2개입",
                price: 8900,
                isModal: true
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
    },
    mutations: {
        addCart(state, cartItem){
            state.cart.push(cartItem);
        },
        updateItems(state, payload){
            state.items = state.items.filter(item=>{
                return item.id !== payload.id
            })
        },
        shave_modal(state, payload){
            state.shave_modal = payload
        }
    }
})

export default store;