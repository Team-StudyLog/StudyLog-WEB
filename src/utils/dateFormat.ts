export const dateFormat = (date: string): string => {
  const [year, month] = date.split("-");
  return `${year}년 ${Number(month)}월`;
};

export const dateFormatWithDot = (date: string): string => {
  const [year, month, day] = date.split("-");
  return `${year}.${Number(month)}.${Number(day)}`;
};
