import { Platform, PlatiniumTrophy } from "@/types/types";

export abstract class PlatformHandler {
  abstract getTrophies(id: string): Promise<Platform>;
}
