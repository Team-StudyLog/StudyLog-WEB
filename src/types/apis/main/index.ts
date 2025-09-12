export interface MainFriendResponse {
  id: number;
  nickname: string;
  profileImage: string;
  code: string;
}

export interface MainProfileResponse {
  userId: number;
  coverImage: string | null;
  profileImage: string;
  name: string;
  intro: string;
  level: number;
  code: string;
}

export interface MainStreakResponse {
  maxStreak: number;
  recordCountPerDay: Record<string, number>;
}

export interface MainCategoryResponse {
  name: string;
  count: number;
}

export interface OtherMainResponse {
  following: MainFriendResponse[];
  profile: MainProfileResponse;
  streak: MainStreakResponse;
  categories: MainCategoryResponse[];
  isFollowing: boolean;
}
