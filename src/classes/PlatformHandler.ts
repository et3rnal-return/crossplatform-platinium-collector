import { PlatiniumTrophy } from "@/types/types";

export abstract class PlatformHandler {
  abstract getTrophies(): PlatiniumTrophy[];
}
