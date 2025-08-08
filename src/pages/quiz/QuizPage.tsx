import TextHeader from "../../components/Header/TextHeader.tsx";
import SearchInput from "../../components/Input/SearchInput.tsx";
import { useEffect, useMemo, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { mockQuizzes } from "../../data/mockQuizzes.ts";
import QuizItem from "./components/QuizItem.tsx";
// import { useFetchQuizList } from "../../apis/quiz/useFetchQuizList.ts";
// import { useInView } from "react-intersection-observer";
import DateFilterChip from "../../components/Chips/DateFilterChip.tsx";
import CategoryFilterChip from "../../components/Chips/CategoryFilterChip.tsx";
import { useFetchCategoryList } from "../../apis/record/useFetchCateogoryList.ts";

const QuizPage = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [category, setCategory] = useState<number | undefined>(undefined);
  const [date, setDate] = useState<string | undefined>(undefined);
  // const { ref, inView } = useInView();
  // const { fetchNextPage, isFetchingNextPage } = useFetchQuizList(keyword, date);

  // useEffect(() => {
  //   if (inView && !isFetchingNextPage) fetchNextPage();
  // }, [inView, fetchNextPage, isFetchingNextPage]);

  useEffect(() => {
    console.log(category, date);
  }, [category, date]);

  const filteredQuizzes = useMemo(() => {
    const lowerKeyword = keyword.trim().toLowerCase();
    if (!lowerKeyword) {
      return mockQuizzes;
    }
    return mockQuizzes.filter((quiz) =>
      quiz.title.toLowerCase().includes(lowerKeyword)
    );
  }, [keyword]);

  const { data: categories } = useFetchCategoryList();

  return (
    <div className={`flex flex-col`}>
      <TextHeader text={"퀴즈"} />
      <SearchInput
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder={"제목으로 퀴즈를 검색하세요"}
      />
      <section className={`flex flex-col px-[26px] mt-[20px]`}>
        <h2 className={`font-head05-semibold-20 text-gray-700`}>생성된 퀴즈</h2>
        <div className={`flex gap-x-[5px] mt-[12px] mb-[16px]`}>
          <CategoryFilterChip
            defaultLabel="카테고리"
            options={categories || []}
            selectedOption={category}
            onSelect={setCategory}
          />
          <DateFilterChip
            defaultLabel="날짜"
            selectedDate={date}
            onSelect={setDate}
          />
        </div>
        {filteredQuizzes.length > 0 ? (
          filteredQuizzes.map((quiz, index) => (
            <QuizItem key={index} quiz={quiz} />
          ))
        ) : (
          <p
            className={`flex w-full justify-center font-body05-medium-14 text-gray-500 mt-[40px]`}
          >
            {mockQuizzes.length > 0 ? "해당 퀴즈가 없어요" : "퀴즈가 없어요"}
          </p>
        )}
      </section>
      {/*<div ref={ref} className={`h-[1px]`} />*/}
    </div>
  );
};

export default QuizPage;
