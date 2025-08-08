export function parseStringToLevel(level: string) {
  switch (level) {
    case "하":
      return "EASY";
    case "중":
      return "MEDIUM";
    case "상":
      return "HARD";
    default:
      throw new Error(`Unknown level: ${level}`);
  }
}

export function parseLevelToString(level: "EASY" | "MEDIUM" | "HARD") {
  switch (level) {
    case "EASY":
      return "하";
    case "MEDIUM":
      return "중";
    case "HARD":
      return "상";
    default:
      throw new Error(`Unknown level: ${level}`);
  }
}

export function parseColorToCode(color: string) {
  switch (color.toUpperCase()) {
    case "ROSE_PINK":
      return "#D895A6";
    case "BABY_BLUE":
      return "#A7C9F7";
    case "BABY_PINK":
      return "#E8C1C1";
    case "COOL_GRAY":
      return "#CAD1E0";
    case "MELON_GREEN":
      return "#B5E1B2";
    case "LAVENDER_PURPLE":
      return "#A0A3F2";
    case "PALE_YELLOW":
      return "#F6D68C";
    case "LILAC_PURPLE":
      return "#C9BAF3";
    case "CEMENT_GRAY":
      return "#9E9EA3";
    case "PALE_ORANGE":
      return "#FFB877";
    default:
      throw new Error(`Unknown color: ${color}`);
  }
}

export function parseCodeToColor(code: string) {
  switch (code) {
    case "#D895A6":
      return "ROSE_PINK";
    case "#A7C9F7":
      return "BABY_BLUE";
    case "#E8C1C1":
      return "BABY_PINK";
    case "#CAD1E0":
      return "COOL_GRAY";
    case "#B5E1B2":
      return "MELON_GREEN";
    case "#A0A3FE":
      return "LAVENDER_PURPLE";
    case "#F6D68C":
      return "PALE_YELLOW";
    case "#C9BAF3":
      return "LILAC_PURPLE";
    case "#9E9EA3":
      return "CEMENT_GRAY";
    case "#FFB877":
      return "PALE_ORANGE";
    default:
      throw new Error(`Unknown code: ${code}`);
  }
}
