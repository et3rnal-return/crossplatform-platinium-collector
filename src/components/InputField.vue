<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({ props: { modelValue: String }, emits: ["update:modelValue"] })
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
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 2px;
  padding: 1.4rem 2rem 1.6rem;
  background: $input-background;
  flex-grow: 1;
  color: $input-text-active;
  font-size: 1.8rem;
  line-height: 2.4rem;
  vertical-align: middle;

  &::-webkit-input-placeholder {
    color: $input-text-inactive;
  }
}

button {
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
