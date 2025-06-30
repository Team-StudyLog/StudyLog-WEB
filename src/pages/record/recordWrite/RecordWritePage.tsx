import TextHeader from "../../../components/Header/TextHeader.tsx";
import { useState } from "react";
import SecondRecordFormPage from "../SecondRecordFormPage.tsx";
import FirstRecordFormPage from "../FirstRecordFormPage.tsx";
import { formPageStyle } from "../../auth/signup/SignupPage.styles.ts";

const RecordWritePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className={formPageStyle}>
      <TextHeader
        text={"기록 추가"}
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
          type="write"
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

export default RecordWritePage;
