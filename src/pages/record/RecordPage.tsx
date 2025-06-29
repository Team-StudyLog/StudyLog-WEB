import TextHeader from "../../components/Header/TextHeader.tsx";
import SearchInput from "../../components/Input/SearchInput.tsx";
import { useState } from "react";
import FilterChip from "../../components/Chips/FilterChip.tsx";
import RecordItem from "./RecordItem.tsx";
import { mockRecords } from "../../data/mockRecords.ts";
import FloatingActionButton from "../../components/Button/FloatingActionButton.tsx";

const RecordPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [category, setCategory] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<string | undefined>(undefined);

  return (
    <div className={`flex flex-col`}>
      <TextHeader text={"기록"} />
      <SearchInput
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder={"제목으로 기록을 검색하세요"}
      />
      <FloatingActionButton onClick={() => {}} text={"기록하러 가기"} />
      <section className={`flex flex-col px-[26px] mt-[20px]`}>
        <h2 className={`font-head05-semibold-20 text-gray-700`}>
          나의 아카이빙
        </h2>
        <div className={`flex gap-x-[5px] mt-[12px] mb-[16px]`}>
          <FilterChip
            type={"category"}
            defaultLabel={"카테고리"}
            options={["카테고리", "미적분", "기하와 벡터", "스프링"]}
            selectedOption={category}
            onSelect={setCategory}
          />
          <FilterChip
            type={"date"}
            defaultLabel={"날짜"}
            options={[]}
            selectedOption={date}
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
