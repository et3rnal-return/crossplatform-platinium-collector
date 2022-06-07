export type GameData = {
  name: string;
  imgSrc: string;
};

export type PlatiniumTrophy = {
  game: GameData;
  timePlayed: string;
  completionPercentage: number;
};

export type Platform = {
  name: string;
  trophies: PlatiniumTrophy[];
};
