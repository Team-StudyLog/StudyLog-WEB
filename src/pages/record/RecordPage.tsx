import TextHeader from "../../components/Header/TextHeader.tsx";
import SearchInput from "../../components/Input/SearchInput.tsx";
import { useState } from "react";
import RecordItem from "./RecordItem.tsx";
import { mockRecords } from "../../data/mockRecords.ts";
import FloatingActionButton from "../../components/Button/FloatingActionButton.tsx";
import useEasyNavigate from "../../hooks/useEasyNavigate.ts";
import CategoryFilterChip from "../../components/Chips/CategoryFilterChip.tsx";
import DateFilterChip from "../../components/Chips/DateFilterChip.tsx";

const RecordPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [category, setCategory] = useState<number | undefined>(undefined);
  const [date, setDate] = useState<string | undefined>(undefined);

  const { goRecordWritePage } = useEasyNavigate();
  const categories = [
    { id: 1, name: "미적분", color: "#FFB6C1" },
    { id: 2, name: "기하와 벡터", color: "#ADD8E6" },
    { id: 3, name: "스프링", color: "#90EE90" },
    { id: 4, name: "통계", color: "#FFD700" },
    { id: 5, name: "확률", color: "#FF6347" },
    { id: 6, name: "수열", color: "#98FB98" },
    { id: 7, name: "행렬", color: "#87CEEB" },
    { id: 8, name: "미분방정식", color: "#FF69B4" },
    { id: 9, name: "복소수", color: "#DDA0DD" },
    { id: 10, name: "벡터", color: "#FF4500" },
    { id: 11, name: "기타", color: "#B0C4DE" },
  ];

  return (
    <div className={`flex flex-col`}>
      <TextHeader text={"기록"} />
      <SearchInput
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder={"제목으로 기록을 검색하세요"}
      />
      <FloatingActionButton
        onClick={goRecordWritePage}
        text={"기록하러 가기"}
      />
      <section className={`flex flex-col px-[26px] mt-[20px]`}>
        <h2 className={`font-head05-semibold-20 text-gray-700`}>
          나의 아카이빙
        </h2>
        <div className={`flex gap-x-[5px] mt-[12px] mb-[16px]`}>
          <CategoryFilterChip
            defaultLabel={"카테고리"}
            options={categories}
            selectedOption={category}
            onSelect={setCategory}
          />
          <DateFilterChip
            defaultLabel={"날짜"}
            selectedDate={date}
            onSelect={setDate}
          />
        </div>
        {mockRecords.length > 0 ? (
          mockRecords.map((record, index) => (
            <RecordItem key={index} record={record} />
          ))
        ) : (
          <p
            className={`flex w-full justify-center font-body05-medium-14 text-gray-500 mt-[40px]`}
          >
            기록이 없어요
          </p>
        )}
      </section>
    </div>
  );
};

export default RecordPage;
