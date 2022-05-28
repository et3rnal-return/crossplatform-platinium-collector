import { PlatformHandler } from "@/classes/PlatformHandler";
import { PlatiniumTrophy } from "@/types/types";
import { exchangeNpssoForCode } from "@/utils/access";

export class SteamHandler extends PlatformHandler {
  async getTrophies(id: string): Promise<PlatiniumTrophy[]> {
    const url = `http://localhost:8081/trophies?platform=Steam&id=${id}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((i) => i.json());
    console.log(response);
    return Promise.resolve(response);
  }
}
