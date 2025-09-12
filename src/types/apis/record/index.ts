export interface CategoryResponse {
  id: number;
  name: string;
  color: string;
}

export interface RecordResponse {
  id: number;
  title: string;
  content: string;
  category: CategoryResponse;
  createdAt: string;
  hasQuiz: boolean;
}

export interface RecordDetailResponse {
  id: number;
  title: string;
  content: string;
  category: CategoryResponse;
  createdAt: string;
  quizCount: number;
}

export interface StreakResponse {
  currentStreak: number;
  isStreakUpdated: boolean;
}
