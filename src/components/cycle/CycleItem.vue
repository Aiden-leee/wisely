<template>
  <div class="item_cycle" @click="toggleCycleList">
    <div class="wrap">
      <span class="item_title">{{ option.title }} 주기</span>
      <div class="info">
        <span class="selected"
          ><span class="best" v-if="selected_cycle.best">BEST</span
          >{{ selected_cycle.name }}</span
        >
      </div>
    </div>
    <div class="cycle_wrap" @click="bubbleGuard">
      <template v-for="cycle in cycles">
        <div
          class="box"
          :key="cycle.id"
          @click="selected(cycle)"
          :class="{ selected: cycle.active }"
        >
          <span class="cycle_icon">
            <img
              :src="cycle.active ? cycle.img_on : cycle.img"
              :alt="cycle.name"
            />
          </span>
          <div class="cycle_name">
            <span>{{ cycle.name }}</span>
          </div>
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
      type: Object,
    },
    idx: {
      type: Number,
    },
  },
  data() {
    return {
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
      ],
    };
  },
  created() {
    this.cycles.forEach((item) => {
      if (item.active) {
        this.selected_cycle = {
          option_id: item.id,
          name: item.name,
          best: item.best ? true : false,
        };
        this.$store.commit("addOption", [this.selected_cycle, this.option]);
      }
    });
  },
  methods: {
    toggleCycleList() {
      let cycleItem = document.querySelector(".item_cycle");
      if (
        !cycleItem.parentNode.childNodes[this.idx].classList.contains("active")
      ) {
        this.initClass();
        cycleItem.parentNode.childNodes[this.idx].classList.add("active");
      } else {
        this.initClass();
        cycleItem.parentNode.childNodes[this.idx].classList.remove("active");
      }
      //   this.isActive = !this.isActive;
    },
    initClass() {
      let cycleItem = document.querySelector(".item_cycle");
      cycleItem.parentNode.childNodes.forEach((tem) => {
        tem.classList.remove("active");
      });
    },
    bubbleGuard(e) {
      e.stopPropagation();
    },
    selected(tg) {
      this.selected_cycle = {};
      this.option.option = {};
      this.cycles.forEach((item) => {
        if (item.id === tg.id) {
          item.active = true;
          let cycleItem = document.querySelector(".item_cycle");
          cycleItem.parentNode.childNodes.forEach((tem) => {
            tem.classList.remove("active");
          });
          this.selected_cycle = {
            option_id: tg.id,
            name: item.name,
            best: item.best ? true : false,
          };
        } else {
          item.active = false;
        }
      });
      this.$store.commit("addOption", [this.selected_cycle, this.option]);
    },
  },
};
</script>

<style></style>
