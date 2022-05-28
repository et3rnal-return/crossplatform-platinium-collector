import { PlatiniumTrophy } from "@/types/types";

export abstract class PlatformHandler {
  abstract getTrophies(id: string): Promise<PlatiniumTrophy[]>;
}
