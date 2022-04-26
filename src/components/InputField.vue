<template>
  <div class="input-container">
    <input class="" placeholder="your psn" />
    <button type="submit">-></button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({})
export default class InputField extends Vue {}
</script>

<style lang="scss" scoped>
$input-background: rgba(57, 63, 84, 0.8);
$input-text-inactive: #7881a1;
$input-text-active: #bfd2ff;
button {
  padding: 0;
  background: none;
  border: none;
  outline: none;
}

input {
  border-style: none;
  background: transparent;
  outline: none;
}

.input-container {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 2px;
  padding: 1.4rem 2rem 1.6rem;
  background: $input-background;
}

.input-container input {
  flex-grow: 1;
  color: $input-text-active;
  font-size: 1.8rem;
  line-height: 2.4rem;
  vertical-align: middle;

  &::-webkit-input-placeholder {
    color: $input-text-inactive;
  }
}

.input-container button {
  color: $input-text-inactive;
  font-size: 2.4rem;
  line-height: 2.4rem;
  vertical-align: middle;
  transition: color 0.25s;

  &:hover {
    color: $input-text-active;
  }
}
</style>
