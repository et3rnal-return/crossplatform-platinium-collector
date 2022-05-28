<template>
  <div @keyup.enter="submit" class="home">
    <PlatformInfo :games="this.trophies" />
    <TrophiesAlbum :games="this.trophies" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import InputField from "@/components/InputField.vue";
import { PSNHandler } from "@/classes/PSNHandler";
import LoadingIndicator from "@/components/LoadingIndicator.vue";
import PlatformFetch from "@/components/PlatformFetch.vue";
import { SteamHandler } from "@/classes/SteamHandler";
import { PlatiniumTrophy } from "@/types/types";
import TrophiesAlbum from "@/components/TrophiesAlbum.vue";
import { trophies } from "@/utils/mocks";
import PlatformInfo from "@/components/PlatformInfo.vue";

export interface IPlatformFetch {
  fetch(): Promise<PlatiniumTrophy[]>;
}

@Options({
  components: {
    PlatformInfo,
    TrophiesAlbum,
    PlatformFetch,
    LoadingIndicator,
    InputField,
  },
})
export default class HomeView extends Vue {
  psn_value?: string = "SingedSpinner";
  steam_id_value?: string = "76561198078630631";
  psnHandler = new PSNHandler();
  steamHandler = new SteamHandler();
  // trophies = new Array<PlatiniumTrophy>();
  trophies = trophies;

  async submit() {
    const fetchers = [this.$refs.psn] as IPlatformFetch[];
    const promises: Promise<PlatiniumTrophy[]>[] = [];
    fetchers.forEach((f) => promises.push(f.fetch()));
    await Promise.all(promises);
  }
}
</script>

<style lang="scss" scoped>
@import "src/breakpoints.scss";

.title {
  color: white;
  @include respond-to("large") {
    font-size: 16px;
  }
}
</style>
