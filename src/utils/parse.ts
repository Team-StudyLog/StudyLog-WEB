import { LevelType } from "../types/apis/quiz/levelType.ts";

export function parseStringToLevel(level: string) {
  switch (level) {
    case "하":
      return LevelType.EASY;
    case "중":
      return LevelType.MEDIUM;
    case "상":
      return LevelType.HARD;
    default:
      throw new Error(`Unknown level: ${level}`);
  }
}

export function parseLevelToString(level: LevelType) {
  switch (level) {
    case LevelType.EASY:
      return "하";
    case LevelType.MEDIUM:
      return "중";
    case LevelType.HARD:
      return "상";
    default:
      throw new Error(`Unknown level: ${level}`);
  }
}
