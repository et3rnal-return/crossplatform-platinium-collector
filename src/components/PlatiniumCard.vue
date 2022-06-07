<template>
  <div
    :class="{ completed: game.completionPercentage === 100 }"
    class="card-wrapper"
  >
    <div class="card">
      <img
        v-if="game.completionPercentage === 100"
        class="platinium-icon"
        src="../assets/platinium-trophy.png"
        alt="none"
      />
      <div class="imgBx">
        <img :src="game.game.imgSrc" alt="none" />
      </div>
      <div class="contentBx">
        <h2>{{ game.game.name }}</h2>
        <div class="details">
          <div>Completion percentage: {{ game.completionPercentage }}%</div>
          <div v-if="game.timePlayed > 0">
            Time played: {{ game.timePlayed }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { PlatiniumTrophy } from "@/types/types";

export default defineComponent({
  props: {
    game: {
      type: Object as PropType<PlatiniumTrophy>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.card-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 28rem;
  height: 20rem;
  border-radius: 20px;
  //overflow: hidden;
  z-index: 1;
  margin: 50px;
}

.card {
  position: relative;
  overflow: hidden;
  background: #232323;
  width: 100%;
  height: 100%;
  z-index: 4;
}

.card-wrapper .platinium-icon {
  position: absolute;
  top: 0;
  right: 0;
  width: 3rem;
  height: 3rem;
  z-index: 2;
}

.card-wrapper .imgBx {
  display: flex;
  justify-content: center;
  //clip-path: inset(15% 15% 15% 15%);
  position: relative;
  height: 75%;
  z-index: 5;
}

.card-wrapper .imgBx img {
  height: 100%;
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.card-wrapper .contentBx {
  padding-top: 10px;
  bottom: 0;
  width: auto;
  height: auto;
  text-align: center;
  z-index: 10;
  transition: all;
  transition-duration: 0.25s;
  background: #232323;
  color: #fff;
}

.card-wrapper .contentBx .details {
  display: grid;
  grid-template-columns: 1fr;
}

.completed::before,
.completed::after {
  opacity: 1;
}

.card-wrapper:hover .contentBx {
  bottom: 35%;
}

.card-wrapper .contentBx h2 {
  margin: 0;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.completed::before,
.completed::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #4aa5f8, #effffe);
  filter: blur(20px);
  opacity: 1;
  z-index: 0;

  transition: 1s;
}

.completed::after {
  filter: blur(10px);
}
</style>
