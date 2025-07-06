import { useState } from "react";

const useCurrentDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleLeftClick = () => {
    const prevMonth = new Date(currentDate);
    prevMonth.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(prevMonth);
  };

  const handleRightClick = () => {
    const nextMonth = new Date(currentDate);
    nextMonth.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(nextMonth);
  };

  return { currentDate, handleLeftClick, handleRightClick };
};

export default useCurrentDate;
