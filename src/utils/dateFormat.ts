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
