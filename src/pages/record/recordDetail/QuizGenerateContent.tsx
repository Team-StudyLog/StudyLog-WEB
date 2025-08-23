import RadioButton from "../../../components/Button/RadioButton.tsx";

interface Props {
  quizLevel: string | undefined;
  setQuizLevel: (v: string | undefined) => void;
  quizCount: number | undefined;
  setQuizCount: (v: number | undefined) => void;
  value: string;
  setValue: (v: string) => void;
}

const QuizGenerateContent = ({
  quizLevel,
  setQuizLevel,
  quizCount,
  setQuizCount,
  value,
  setValue,
}: Props) => {
  const handleLevelChange = (level: string) => {
    if (quizLevel === level) {
      setQuizLevel(undefined); // 다시 클릭하면 해제
    } else {
      setQuizLevel(level); // 새 선택
    }
  };

  const handleCountChange = (countText: string) => {
    const num = parseInt(countText);
    if (quizCount === num) {
      setQuizCount(undefined); // 다시 클릭하면 해제
    } else {
      setQuizCount(num); // 새 선택
    }
  };

  return (
    <section className="flex flex-col px-[26px] py-[40px] gap-y-[25px]">
      <div className="flex flex-col gap-y-[16px]">
        <h3 className="font-head06-semibold-16 text-gray-700">
          난이도 선택 <span className="text-red">*</span>
        </h3>
        <div className="flex w-full gap-x-[8px]">
          {["상", "중", "하"].map((level) => (
            <RadioButton
              key={level}
              text={level}
              checked={quizLevel === level}
              onChange={handleLevelChange}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-[16px]">
        <h3 className="font-head06-semibold-16 text-gray-700">
          퀴즈 개수 선택 <span className="text-red">*</span>
        </h3>
        <div className="flex w-full gap-x-[8px]">
          {["1개", "2개", "3개"].map((countText) => {
            const num = parseInt(countText);
            return (
              <RadioButton
                key={countText}
                text={countText}
                checked={quizCount === num}
                onChange={handleCountChange}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-y-[16px]">
        <h3 className="font-head06-semibold-16 text-gray-700">
          퀴즈 요구사항
          <span className="text-red"> *</span>
        </h3>
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="퀴즈를 생성하기 위한 요구사항을 입력해주세요"
          className="w-full bg-gray-100 rounded-[10px] px-[20px] py-[24px] font-body05-medium-14 text-gray-700 placeholder-gray-500 outline-none min-h-[144px] resize-none"
        />
      </div>
    </section>
  );
};

export default QuizGenerateContent;
