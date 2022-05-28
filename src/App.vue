<template>
  <div class="container-center">
    <router-view />
    <theme-toggle-button class="theme-button" />
  </div>
</template>

<style lang="scss">
@import "src/breakpoints.scss";

html,
body {
  padding: 0;
  margin: 0;
}

:root {
  --background-color-primary: #ebebeb;
  --background-color-secondary: #fafafa;
  --accent-color: #cacaca;
  --text-primary-color: #222;
  --element-size: 4rem;
  font-size: 8px;

  @include respond-to("large") {
    font-size: 16px;
  }
}

:root.dark-theme {
  --background-color-primary: #1e1e1e;
  --background-color-secondary: #2d2d30;
  --accent-color: #3f3f3f;
  --text-primary-color: #ddd;
}

.container-center {
  background-color: var(--background-color-primary);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.theme-button {
  top: 5px;
  right: 5px;
  position: fixed;
}
</style>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ThemeToggleButton from "./components/ThemeToggleButton.vue";
import InputField from "@/components/InputField.vue";
import PlatiniumCard from "@/components/PlatiniumCard.vue";
@Options({
  components: { PlatiniumCard, InputField, ThemeToggleButton },
})
export default class App extends Vue {}
</script>
