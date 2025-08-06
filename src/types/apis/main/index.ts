export interface MainFriendResponse {
  id: number;
  nickname: string;
  profileImage: string;
  code: string;
}

export interface MainProfileResponse {
  coverImage: string;
  profileImage: string;
  name: string;
  intro: string;
  level: number;
  code: string;
}

export interface MainStreakResponse {
  maxStreak: number;
  currentStreak: Record<string, number>;
}

export interface MainCategoryResponse {
  name: string;
  count: number;
}

export interface MainResponse {
  following: MainFriendResponse[];
  profile: MainProfileResponse;
  streak: MainStreakResponse;
  categories: MainCategoryResponse[];
}
