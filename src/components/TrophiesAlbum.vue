<template>
  <carousel
    :autoplay="5000000"
    :wrap-around="true"
    :items-to-show="games.length"
    :transition="100"
    :pauseAutoplayOnHover="true"
  >
    <slide v-for="(game, index) in games" :key="index">
      <PlatiniumCard :game="game" />
    </slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </carousel>
</template>

<script lang="ts">
import { PlatiniumTrophy } from "@/types/types";
import PlatiniumCard from "@/components/PlatiniumCard.vue";
import { defineComponent, PropType } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

export default defineComponent({
  components: {
    PlatiniumCard,
    Carousel,
    Slide,
  },
  props: {
    games: {
      type: Object as PropType<PlatiniumTrophy[]>,
      required: true,
    },
  },
  mounted() {
    console.log(this.games);
  },
});
</script>
