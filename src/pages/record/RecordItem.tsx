import CategoryDot from "../../components/Chips/CategoryDot.tsx";
import { Leaf } from "lucide-react";
import useEasyNavigate from "../../hooks/useEasyNavigate.ts";
import type { RecordResponse } from "../../types/apis/record";
import { parseColorToCode } from "../../utils/parse.ts";

interface RecordItemProps {
  record: RecordResponse;
}

const RecordItem = ({ record }: RecordItemProps) => {
  const { goRecordDetailPage } = useEasyNavigate();

  return (
    <div
      className="flex w-full justify-between items-start gap-x-[10px] bg-white rounded-[10px] px-[18px] py-[20.5px] mb-[10px]"
      onClick={() => goRecordDetailPage(record.id)}
    >
      <section className="flex">
        <CategoryDot color={parseColorToCode(record.category.color)} />
        <div className="flex flex-col gap-y-[8px] ml-[8px]">
          <span className="text-gray-700 font-body06-regular-16 max-w-[260px] truncate">
            {record.title}
          </span>
          <p className="text-gray-500 font-body10-regular-10">
            {record.category.name}
          </p>
        </div>
      </section>
      <div className="flex-shrink-0 flex font-body10-regular-10 items-start">
        <Leaf
          size={24}
          className={`${record.hasQuiz ? "text-green-300" : "text-gray-400"}`}
        />
      </div>
    </div>
  );
};

export default RecordItem;
