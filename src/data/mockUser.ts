export type User = {
  id: number;
  name: string;
  description: string;
  profileImageUrl: string;
  code: string;
  level: number;
};

export const mockUser: User = {
  id: 1,
  name: "가을",
  description:
    "프론트엔드 개발자를 꿈꾸고 있습니다. 저는 React와 TypeScript를 안 좋아해요.",
  profileImageUrl: "https://avatars.githubusercontent.com/u/91470334?v=4",
  code: "UX320",
  level: 5,
};
