import TextHeader from "../../components/Header/TextHeader.tsx";
import SearchInput from "../../components/Input/SearchInput.tsx";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import QuizItem from "./components/QuizItem.tsx";
import { useFetchQuizList } from "../../apis/quiz/useFetchQuizList.ts";
import { useInView } from "react-intersection-observer";
import DateFilterChip from "../../components/Chips/DateFilterChip.tsx";
import CategoryFilterChip from "../../components/Chips/CategoryFilterChip.tsx";
import { useFetchCategoryList } from "../../apis/record/useFetchCateogoryList.ts";

const QuizPage = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [category, setCategory] = useState<number | undefined>(undefined);
  const [date, setDate] = useState<string | undefined>(undefined);
  const { ref, inView } = useInView({ threshold: 0 });
  const { data, fetchNextPage, isFetchingNextPage } = useFetchQuizList(
    keyword,
    date,
    category
  );
  const quizzes = data?.pages.flatMap((page) => page.quizzes) || [];

  useEffect(() => {
    if (inView && !isFetchingNextPage) fetchNextPage();
  }, [inView, fetchNextPage, isFetchingNextPage]);

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

        {keyword ? (
          quizzes.length > 0 ? (
            quizzes.map((quiz, index) => <QuizItem key={index} quiz={quiz} />)
          ) : (
            <p className="flex w-full justify-center font-body05-medium-14 text-gray-500 mt-[40px]">
              검색된 퀴즈가 없습니다
            </p>
          )
        ) : quizzes.length > 0 ? (
          quizzes.map((quiz, index) => <QuizItem key={index} quiz={quiz} />)
        ) : (
          <p className="flex w-full justify-center font-body05-medium-14 text-gray-500 mt-[40px]">
            퀴즈가 없습니다
          </p>
        )}
      </section>
      <div ref={ref} className={`h-1`} />
    </div>
  );
};

export default QuizPage;
