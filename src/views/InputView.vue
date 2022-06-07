<template>
  <h1 class="title">platinium collector</h1>
  <PlatformFetch
    v-model="psn_value"
    ref="psn"
    @trophies="
      (v) => {
        this.trophies.push(v);
      }
    "
    :platform-handler="psnHandler"
  />
  <PlatformFetch
    v-model="steam_id_value"
    ref="steam"
    @trophies="
      (v) => {
        this.trophies.push(v);
      }
    "
    :platform-handler="steamHandler"
  />
  <button @click="submit">collect trophies</button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import InputField from "@/components/InputField.vue";
import { PSNHandler } from "@/classes/PSNHandler";
import LoadingIndicator from "@/components/LoadingIndicator.vue";
import PlatformFetch from "@/components/PlatformFetch.vue";
import { SteamHandler } from "@/classes/SteamHandler";
import { Platform, PlatiniumTrophy } from "@/types/types";
import TrophiesAlbum from "@/components/TrophiesAlbum.vue";
import { trophies } from "@/utils/mocks";
import PlatformInfo from "@/components/PlatformInfo.vue";

export interface IPlatformFetch {
  fetch(): Promise<Platform>;
}

@Options({
  components: {
    PlatformInfo,
    TrophiesAlbum,
    PlatformFetch,
    LoadingIndicator,
    InputField,
  },
  emits: ["platforms"],
})
export default class InputView extends Vue {
  psn_value: string | null = "SingedSpinner";
  steam_id_value: string | null = "76561198078630631";
  psnHandler = new PSNHandler();
  steamHandler = new SteamHandler();
  trophies = new Array<Platform>();

  async mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    this.steam_id_value = urlParams.get("steam");
    this.psn_value = urlParams.get("psn");
    if (urlParams.get("psn") || urlParams.get("steam")) {
      await this.submit();
    }
  }

  async submit() {
    const fetchers = [this.$refs.psn, this.$refs.steam] as IPlatformFetch[];
    const promises: Platform[] = [];
    for (const f of fetchers) {
      const value = await f.fetch();
      console.log(value, "VALUE");
      promises.push(value);
    }
    this.$emit("platforms", promises);
  }
}
</script>

<style lang="scss" scoped>
@import "src/breakpoints.scss";

.home {
  width: 100%;
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  padding: 50px;
}

.album-wrapper {
  position: absolute;
  transform: translate(-50%, 0);
  left: 50%;
  bottom: 10%;
}

.trophies-album {
  //position: absolute;
  //top: 0;
  //left: 0;
}

.title {
  color: white;
  @include respond-to("large") {
    font-size: 16px;
  }
}

.platform-info-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
}
</style>
