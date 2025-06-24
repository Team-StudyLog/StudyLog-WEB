export type CategoryT = {
  id: number;
  name: string;
  count: number;
};

export const mockCategories: CategoryT[] = [
  { id: 1, name: "미적분", count: 104 },
  { id: 2, name: "선형대수", count: 80 },
  { id: 3, name: "확률과 통계", count: 65 },
  { id: 4, name: "물리학", count: 13 },
  { id: 5, name: "화학", count: 2 },
];
