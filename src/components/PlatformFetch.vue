<template>
  <InputField
    @change="$emit('update:modelValue', platform)"
    v-model="platform"
  ></InputField>
  <LoadingIndicator
    v-if="trophies !== undefined"
    :loaded="trophies?.length >= 0"
  />
</template>

<script lang="ts">
import LoadingIndicator from "@/components/LoadingIndicator.vue";
import InputField from "@/components/InputField.vue";
import { PlatformHandler } from "@/classes/PlatformHandler";
import { defineComponent, PropType } from "vue";
import { PlatiniumTrophy } from "@/types/types";

export interface PlatformFetchData {
  platform: string;
  trophies: PlatiniumTrophy[] | undefined | null;
}

export default defineComponent({
  components: { LoadingIndicator, InputField },
  props: {
    modelValue: String,
    platformHandler: {
      type: Object as PropType<PlatformHandler>,
      required: true,
    },
  },
  emits: ["update:modelValue", "trophies"],
  data(): PlatformFetchData {
    return {
      platform: "",
      trophies: undefined,
    };
  },
  created() {
    this.platform = this.modelValue ?? "";
  },
  methods: {
    async fetch() {
      this.trophies = null;
      this.trophies = await this.platformHandler.getTrophies(this.platform);
      this.$emit("trophies", this.trophies);
    },
  },
});
</script>

<style scoped></style>
