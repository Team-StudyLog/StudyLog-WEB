import TextHeader from "../../../components/Header/TextHeader.tsx";
import { formPageStyle } from "../../auth/signup/SignupPage.styles.ts";
import FirstRecordFormPage from "../FirstRecordFormPage.tsx";
import SecondRecordFormPage from "../SecondRecordFormPage.tsx";
import { useEffect, useState } from "react";
import { useFetchRecordDetail } from "../../../apis/record/useFetchRecordDetail.ts";
import { useParams } from "react-router-dom";
import type { Category } from "../recordWrite/RecordWritePage.tsx";

const RecordEditPage = () => {
  const recordId = Number(useParams<{ recordId: string }>().recordId);
  const { data } = useFetchRecordDetail(recordId);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (data) {
      setTitle(data.record.title);
      setContent(data.record.content);
      setSelectedCategory(data.record.category);
    }
  }, [data]);

  return (
    <div className={formPageStyle}>
      <TextHeader
        text={"기록 수정"}
        onClick={currentPage === 2 ? () => setCurrentPage(1) : undefined}
      />
      {currentPage === 1 ? (
        <FirstRecordFormPage
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onNext={() => setCurrentPage(2)}
        />
      ) : (
        <SecondRecordFormPage
          type="edit"
          selectedCategory={selectedCategory}
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
        />
      )}
    </div>
  );
};

export default RecordEditPage;
