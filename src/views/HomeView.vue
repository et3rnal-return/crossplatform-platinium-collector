<template>
  <div class="home">
    <InputField></InputField>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import InputField from "@/components/InputField.vue";

@Options({
  components: { InputField },
})
export default class HomeView extends Vue {}
</script>
