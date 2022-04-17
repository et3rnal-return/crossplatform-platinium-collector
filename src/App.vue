<template>
  <div class="container-center">
    <router-view />
    <ThemeToggleButton>Ś</ThemeToggleButton>
  </div>
</template>

<style>
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
}
</style>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ThemeToggleButton from "./components/ThemeToggleButton.vue";
@Options({
  components: { ThemeToggleButton },
})
export default class App extends Vue {}
</script>
