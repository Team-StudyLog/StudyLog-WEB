import TextHeader from "../../components/Header/TextHeader.tsx";
import SearchInput from "../../components/Input/SearchInput.tsx";
import { useMemo, useState } from "react";
import FilterChip from "../../components/Chips/FilterChip.tsx";
import "react-datepicker/dist/react-datepicker.css";
import { mockQuizzes } from "../../data/mockQuizzes.ts";
import QuizItem from "./components/QuizItem.tsx";

const QuizPage = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [category, setCategory] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<string | undefined>(undefined);

  const filteredQuizzes = useMemo(() => {
    const lowerKeyword = keyword.trim().toLowerCase();
    if (!lowerKeyword) {
      return mockQuizzes;
    }
    return mockQuizzes.filter((quiz) =>
      quiz.title.toLowerCase().includes(lowerKeyword)
    );
  }, [keyword]);

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
    </div>
  );
};

export default QuizPage;
