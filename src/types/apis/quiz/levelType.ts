export const LevelType = {
  EASY: "하",
  MEDIUM: "중",
  HARD: "상",
} as const;

export type LevelType = (typeof LevelType)[keyof typeof LevelType];
