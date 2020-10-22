import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const CART = "cart";
const storageFunc = (state) => {
  localStorage.setItem(CART, JSON.stringify(state.cart));
};
const store = new Vuex.Store({
  state: {
    total_count: 0, // 총 개수
    total_price: 0, // 총 가격
    cart: [], // 장바구니
    shave_modal: false, // 면도기 모달 상태값
    shave_color: 1, // 1: navy, 2: blue, 3: gray
    currentWeek: 8, // 리필면도기 기준 주기
    deliveryDate: null,
    items: [
      {
        id: 1,
        img:
          "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/items/starter_kit/starter_navy.png",
        title: "면도기 세트",
        des: "면도기 핸들+면도날 2개입",
        price: 8900,
        quantity: 1,
        isModal: true,
      },
      {
        id: 2,
        img:
          "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/items/blade/refill_blade.png",
        title: "리필 면도날",
        des: "4입",
        price: 9600,
        quantity: 1,
      },
      {
        id: 3,
        img:
          "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/items/shaving_gel/shaving_gel_150.png",
        title: "쉐이빙젤",
        des: "스탠다드 150ml",
        price: 4500,
        quantity: 1,
      },
      {
        id: 4,
        img:
          "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/items/aftershaving/after_shaving_gel_dry_60.png",
        title: "리페어 에프터쉐이브",
        des: "스탠다드 60ml",
        price: 6500,
        quantity: 1,
      },
    ],
  },
  getters: {
    cart(state) {
      return state.cart;
    },
    total_price(state) {
      return state.total_price;
    },
  },
  mutations: {
    // 초기 load 시 카트
    loadCart(state, cartItem) {
      state.cart = cartItem;
      state.cart.forEach((tem) => {
        store.commit("updateItems", tem);
      });
    },
    // 카트 상품 추가
    addCart(state, cartItem) {
      state.cart.push(cartItem);
      storageFunc(state);
    },
    // 카트상품 목록 삭제
    removeCart(state, cartItem) {
      state.cart = state.cart.filter((item) => {
        return item.id !== cartItem.id;
      });
      storageFunc(state);
    },
    // 카트 상품 목록 기존 목록으로 돌아가기
    revertItem(state, cartItem) {
      state.items.push(cartItem);
      state.items.sort((a, b) => {
        return a.id - b.id;
      });
    },
    // 기존 아이템 목록 정리
    updateItems(state, payload) {
      state.items = state.items.filter((item) => {
        return item.id !== payload.id;
      });
    },
    // 카트 상품 수량 증가
    plusQuantity(state, [cartItem, count]) {
      state.cart.forEach((tem) => {
        if (tem.id === cartItem.id) {
          tem.quantity = count;
        }
      });
      storageFunc(state);
    },
    // 카트 상품 수량 감소
    minusQuantity(state, [cartItem, count]) {
      state.cart.forEach((tem) => {
        if (tem.id === cartItem.id) {
          tem.quantity = count;
        }
      });
      storageFunc(state);
    },
    // 주기 변경
    changeWeek(state, week) {
      state.currentWeek = week;
    },
    // cycle option 추가
    addOption(state, [cycle, tg]) {
      state.cart.forEach((tem) => {
        if (tem.id === tg.id) {
          tem.option = {};
          tem.option = cycle;
        }
      });
      storageFunc(state);
    },
    // 면도기 색상
    getColor(state, color) {
      state.shave_color = color;
    },
    // 총 가격
    totalPrice(state, price) {
      state.total_price = price;
      storageFunc(state);
    },
    // 총 카트 개수
    totalCount(state, count) {
      state.total_count = count;
      storageFunc(state);
    },
    deliveryDate(state, day) {
      state.deliveryDate = day;
    },
    // 모달 팝업 상태값
    shave_modal(state, [payload, shave]) {
      // 면도기 색상 선택 후 아이템 추가
      if (shave) {
        let result = state.items.find((tem) => {
          return tem.id === 1;
        });
        store.commit("addCart", result);
        store.commit("updateItems", result);
      }
      state.shave_modal = payload;
      storageFunc(state);
    },
  },
});

export default store;
