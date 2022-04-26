<template>
  <div class="card">
    <img
      class="platinium-icon"
      src="../assets/platinium-trophy.png"
      alt="none"
    />
    <div class="imgBx">
      <img
        src="https://image.api.playstation.com/vulcan/img/rnd/202011/2320/E3hXKQ8iL9BJtAT8gR9nmIMF.png"
        alt="none"
      />
    </div>
    <div class="contentBx">
      <h2>Bloodborne</h2>
      <div class="details">
        <div>percentage</div>
        <div>play time</div>
        <div>date</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class PlatiniumCard extends Vue {}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 28rem;
  background: #232323;
  border-radius: 20px;
  overflow: hidden;
}

.card .platinium-icon {
  position: absolute;
  top: 0;
  right: 0;
  width: 3rem;
  height: 3rem;
}

.card .imgBx {
  display: flex;
  justify-content: center;
  clip-path: inset(15% 15% 15% 15%);
  position: relative;
  height: 100%;
}

.card .imgBx img {
  height: 100%;
}

.card .contentBx {
  padding-top: 10px;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  transform: translate(0, 90%);
  text-align: center;
  z-index: 10;
  transition: all;
  transition-duration: 1s;
  background: #232323;
  color: #fff;
}

.card .contentBx .details {
  display: grid;
  grid-template-columns: 1fr;
}

.card:hover .contentBx {
  bottom: 35%;
}

.card .contentBx h2 {
  margin: 0;
}
</style>
