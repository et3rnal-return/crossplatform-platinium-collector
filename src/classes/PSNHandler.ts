import { PlatformHandler } from "@/classes/PlatformHandler";
import { Platform } from "@/types/types";

export class PSNHandler extends PlatformHandler {
  async getTrophies(id: string): Promise<Platform> {
    const url = `http://localhost:8081/trophies?platform=PSN&id=${id}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((i) => i.json());
    const platform: Platform = { name: "PSN", trophies: response };
    return Promise.resolve(platform);
  }
}
