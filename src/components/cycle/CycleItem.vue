<template>
    <div class="item_cycle" @click="toggleCycleList" :class="{active: isActive}">
        <div class="wrap">
            <span class="item_title">리필면도날 주기</span>
            <div class="info">
                <span class="selected"><span class="best" v-if="selected_cycle.best">BEST</span>{{selected_cycle.name}}</span>
            </div>
        </div>
        <div class="cycle_wrap" @click="bubbleGuard">
            <template v-for="cycle in cycles">
                <div class="box" :key="cycle.id" @click="selected(cycle)" :class="{selected:cycle.active}">
                    <span class="cycle_icon">
                        <img :src="cycle.active ? cycle.img_on : cycle.img" :alt="cycle.name">
                    </span>
                    <div class="cycle_name"><span>{{cycle.name}}</span></div>
                </div>    
            </template>
        </div>
    </div>
</template>

<script>
export default {
    name: "CycleItem",
    props: {
        option: {
            type: Object
        }
    },
    data(){
        return {
            isActive: false,
            selected_cycle: {},
            cycles: [
                {
                    id: 1,
                    name: "4주에 한번",
                    img: require("@/assets/img/cycle_manytime_off.svg"),
                    img_on: require("@/assets/img/cycle_manytime_on.svg"),
                    active: false,
                },
                {
                    id: 2,
                    name: "8주에 한번",
                    img: require("@/assets/img/cycle_day_off.svg"),
                    img_on: require("@/assets/img/cycle_day_on.svg"),
                    best: true,
                    active: true,
                },
                {
                    id: 3,
                    name: "12주에 한번",
                    img: require("@/assets/img/cycle_threeday_off.svg"),
                    img_on: require("@/assets/img/cycle_threeday_on.svg"),
                    active: false,
                },
                {
                    id: 4,
                    name: "16주에 한번",
                    img: require("@/assets/img/cycle_threeday_off.svg"),
                    img_on: require("@/assets/img/cycle_threeday_on.svg"),
                    active: false,
                },
            ] 
        }
    },
    created(){
        this.cycles.forEach(item=>{
            if(item.active){
                this.selected_cycle = {
                    name: item.name,
                    best: item.best ? true : false
                }
            }
        });
        console.log(this.option)
    },
    methods: {
        toggleCycleList(){
            this.isActive = !this.isActive;
            console.log('a');
        },
        bubbleGuard(e){
            e.stopPropagation();
        },
        selected(tg){
            this.selected_cycle = {}
            this.cycles.forEach(item=>{
                if(item.id === tg.id) {
                    item.active = true;
                    this.isActive = false;
                    this.selected_cycle = {
                        name: item.name,
                        best: item.best ? true : false
                    };
                }else {
                    item.active = false;
                }
            })
        }
    }
}
</script>

<style>

</style>