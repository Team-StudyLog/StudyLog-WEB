export const dateFormat = (date: string): string => {
  const [year, month] = date.split("-");
  return `${year}년 ${Number(month)}월`;
};

export const dateFormatWithDot = (date: string): string => {
  const [year, month, day] = date.split("-");
  return `${year}.${Number(month)}.${Number(day)}`;
};

export const dateFormatWithZeroAndDot = (date: string): string => {
  return date
    .replace(/\s/g, "")
    .replace(/\.(\d)(?=\.)/g, ".0$1")
    .replace(/\.(\d)$/, ".0$1");
};

export const relativeDateFormat = (date: string): string => {
  const now = new Date();
  const givenDate = new Date(date);
  const diffInMs = now.getTime() - givenDate.getTime();
  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInMonths / 12);

  if (diffInSeconds < 60) return "방금 전";
  if (diffInMinutes < 60) return `${diffInMinutes}분 전`;
  if (diffInHours < 24) return `${diffInHours}시간 전`;
  if (diffInDays < 30) return `${diffInDays}일 전`;
  if (diffInMonths < 12) return `${diffInMonths}개월 전`;
  return `${diffInYears}년 전`;
};

export const dateToISO = (date: Date) => {
  return date.toISOString().split("T")[0];
};
