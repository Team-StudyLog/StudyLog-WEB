import TextHeader from "../../components/Header/TextHeader.tsx";
import SearchInput from "../../components/Input/SearchInput.tsx";
import { useEffect, useState } from "react";
import RecordItem from "./RecordItem.tsx";
import FloatingActionButton from "../../components/Button/FloatingActionButton.tsx";
import useEasyNavigate from "../../hooks/useEasyNavigate.ts";
import CategoryFilterChip from "../../components/Chips/CategoryFilterChip.tsx";
import DateFilterChip from "../../components/Chips/DateFilterChip.tsx";
import { useFetchCategoryList } from "../../apis/record/useFetchCateogoryList.ts";
import { useInView } from "react-intersection-observer";
import { useFetchRecordList } from "../../apis/record/useFetchRecordList.ts";
import useDebounce from "../../hooks/useDebounce.ts";
import { useFetchRecordSearch } from "../../apis/record/useFetchRecordSearch.ts";

const RecordPage = () => {
  const [keyword, setKeyword] = useState<string>("");
  const debouncedKeyword = useDebounce(keyword, 300);
  const [category, setCategory] = useState<number | undefined>(undefined);
  const [date, setDate] = useState<string | undefined>(undefined);
  const { ref, inView } = useInView();
  const { data, fetchNextPage, isFetchingNextPage } = useFetchRecordList(
    category,
    date
  );
  const { data: filteredRecords, mutate: searchRecords } =
    useFetchRecordSearch();

  const records = data?.pages.flatMap((page) => page.records) || [];
  const renderList =
    debouncedKeyword && filteredRecords?.records
      ? Array.isArray(filteredRecords.records)
        ? filteredRecords.records
        : [filteredRecords.records]
      : records;

  useEffect(() => {
    if (inView && !isFetchingNextPage) fetchNextPage();
  }, [inView, fetchNextPage, isFetchingNextPage]);

  useEffect(() => {
    if (debouncedKeyword !== "") searchRecords(debouncedKeyword);
  }, [debouncedKeyword, searchRecords]);

  const { goRecordWritePage } = useEasyNavigate();
  const { data: categories } = useFetchCategoryList();

  return (
    <div className={`flex flex-col`}>
      <TextHeader text={"기록"} />
      <SearchInput
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
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
            options={categories || []}
            selectedOption={category}
            onSelect={setCategory}
          />
          <DateFilterChip
            defaultLabel={"날짜"}
            selectedDate={date}
            onSelect={setDate}
          />
        </div>
        {renderList && renderList.length > 0 ? (
          renderList.map((record, index) => (
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
      <div ref={ref} className={"h-[1px]"} />
    </div>
  );
};

export default RecordPage;
