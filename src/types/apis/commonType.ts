export interface ApiResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}

export interface UserProfileResponse {
  profileImage: string;
  nickname: string;
  intro: string;
}
