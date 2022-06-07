<template>
  <div class="platform-info-wrapper">
    <PlatformInfo
      v-for="platform in platforms"
      :key="platform.name"
      :platform="platform.name"
      :games="platform.trophies"
    />
  </div>
  <div class="album-wrapper">
    <TrophiesAlbum class="trophies-album" :games="trophies" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LoadingIndicator from "@/components/LoadingIndicator.vue";
import PlatformFetch from "@/components/PlatformFetch.vue";
import { Platform, PlatiniumTrophy } from "@/types/types";
import TrophiesAlbum from "@/components/TrophiesAlbum.vue";
import { trophies } from "@/utils/mocks";
import PlatformInfo from "@/components/PlatformInfo.vue";
import { PropType } from "vue";

@Options({
  components: {
    PlatformInfo,
    TrophiesAlbum,
    PlatformFetch,
    LoadingIndicator,
  },
  props: {
    platforms: {
      type: Object as PropType<Platform[]>,
      required: true,
    },
  },
  computed: {
    trophies() {
      let arr: PlatiniumTrophy[] = [];
      this.platforms.forEach((p: Platform) => {
        arr.push(...p.trophies);
      });
      return arr;
    },
  },
})
export default class AlbumView extends Vue {}
</script>

<style lang="scss" scoped>
@import "src/breakpoints.scss";

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
