<template>
  <div class="shave_modal" @click="closeOverlay">
      <div class="wrap">
          <div class="box" @click="bubbleGuard" :class="{ active: modalState }">
              <div class="h_title">
                   면도기 색상을 선택해 주세요 
              </div>
              <div class="shave_colors">
                    <template v-for="color in shave_colors">
                        <img :src=color.img :alt="color.name" :key="color.id" :class="{active: color.isShow}" />
                    </template>
              </div>
              <div class="select_colors">
                  <template v-for="color in shave_colors">
                    <span :key="color.id" class="round" :class="[color.class, {active:color.isShow}]" @click="selectColor(color)"></span>
                  </template>
                  <div class="current">
                    <span :class="currentClass">{{currentColorName}}</span>
                  </div>
              </div>
              <div class="select_box">
                  <button class="select_btn">선택하기</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "shave_modal",
    data(){
        return {
            shave_colors: [
                {
                    id: 1,
                    img: "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/razor_lie_navy.png",
                    name: "미드나잇 네이비",
                    class: "navy",
                    isShow: true,
                },
                {
                    id: 2,
                    img: "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/razor_lie_blue.png",
                    name: "사파이어 블루",
                    class: "blue",
                    isShow: false,
                },
                {
                    id: 3,
                    img: "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/razor_lie_gray.png",
                    name: "슬레이트 그레이",
                    class: "gray",
                    isShow: false,
                }
            ],
            currentColor: 0,
        }
    },
    computed: {
       currentColorName(){
           let result = this.shave_colors.filter(item=>{
               if(item.isShow){
                   return item.name
               }
           })
           return result[0].name
       },
       currentClass(){
           let result = this.shave_colors.filter(item=>{
               if(item.isShow){
                   return item.class
               }
           })
           return result[0].class
       },
       modalState(){
           return this.$store.state.shave_modal
       }
    },
    mounted(){
    },
    methods: {
        closeOverlay(){
            this.$store.commit("shave_modal", false)
        },
        bubbleGuard(e){
            e.stopPropagation();
        },
        selectColor(current){
            this.shave_colors.find(item=>{
                if(current.id === item.id ){
                    item.isShow = true
                }else {
                    item.isShow = false
                }
            })
        }
    }
}
</script>

<style scoped>
</style>