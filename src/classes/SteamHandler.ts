import { PlatformHandler } from "@/classes/PlatformHandler";
import { Platform, PlatiniumTrophy } from "@/types/types";

export class SteamHandler extends PlatformHandler {
  async getTrophies(id: string): Promise<Platform> {
    const url = `http://localhost:8081/trophies?platform=Steam&id=${id}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((i) => i.json());
    const platform: Platform = { name: "Steam", trophies: response };
    console.log(response, platform, "steam");
    return Promise.resolve(platform);
  }
}
