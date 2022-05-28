<template>
  <div>Games: {{ games.length }}</div>
  <div>Completed: {{ fullCompleted }}</div>
  <div>Time spent: {{ timeSpent }}</div>
</template>

<script lang="ts">
import { PlatiniumTrophy } from "@/types/types";
import PlatiniumCard from "@/components/PlatiniumCard.vue";
import { defineComponent, PropType } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

export default defineComponent({
  props: {
    games: {
      type: Object as PropType<PlatiniumTrophy[]>,
      required: true,
    },
  },
  mounted() {
    console.log(this.games);
  },
  computed: {
    fullCompleted() {
      return this.games.filter((i) => i.completionPercentage === 100).length;
    },
    timeSpent() {
      let sum = 0;
      this.games.forEach((p) => {
        sum += +p.timePlayed;
      });
      return sum;
    },
  },
});
</script>
<style lang="scss" scoped>
div {
  color: white;
  font-size: 30px;
}
</style>
