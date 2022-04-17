<template>
  <div>
    <input
      @change="toggleTheme"
      id="checkbox"
      type="checkbox"
      class="switch-checkbox"
    />
    <label for="checkbox" class="switch-label">
      <span>🌙</span>
      <span>☀️</span>
      <div
        class="switch-toggle"
        :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
      ></div>
    </label>
  </div>
</template>

<script lang="ts">
const themes = ["dark-theme", "light-theme"];
type Theme = typeof themes[number];
import { Options, Vue } from "vue-class-component";

@Options({})
export default class ThemeToggleButton extends Vue {
  userTheme: Theme = "light-theme";
  getTheme() {
    return localStorage.getItem("user-theme");
  }
  toggleTheme() {
    const activeTheme = this.getTheme();
    if (activeTheme && themes.includes(activeTheme)) {
      this.setTheme(activeTheme);
    }
  }
  setTheme(theme: Theme) {
    localStorage.setItem("user-theme", theme);
    this.userTheme = theme;
    document.documentElement.className = theme;
  }

  getMediaPreference(): Theme {
    const hasDarkPreference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    return hasDarkPreference ? "dark-theme" : "light-theme";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.switch-checkbox {
  display: none;
}

.switch-label {
  align-items: center;
  background: var(--text-primary-color);
  border: calc(var(--element-size) * 0.025) solid var(--accent-color);
  border-radius: var(--element-size);
  cursor: pointer;
  display: flex;
  font-size: calc(var(--element-size) * 0.3);
  height: calc(var(--element-size) * 0.35);
  position: relative;
  padding: calc(var(--element-size) * 0.1);
  transition: background 0.5s ease;
  justify-content: space-between;
  width: var(--element-size);
  z-index: 1;
}

.switch-toggle {
  position: absolute;
  background-color: var(--background-color-primary);
  border-radius: 50%;
  top: calc(var(--element-size) * 0.07);
  left: calc(var(--element-size) * 0.07);
  height: calc(var(--element-size) * 0.4);
  width: calc(var(--element-size) * 0.4);
  transform: translateX(0);
  transition: transform 0.3s ease, background-color 0.5s ease;
}

.switch-toggle-checked {
  transform: translateX(calc(var(--element-size) * 0.6)) !important;
}
</style>
