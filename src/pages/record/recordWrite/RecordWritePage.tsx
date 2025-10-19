import type { UploadFile } from "antd";
import { useState } from "react";
import TextHeader from "../../../components/Header/TextHeader.tsx";
import SecondRecordFormPage from "../form/SecondRecordFormPage.tsx";
import FirstRecordFormPage from "../form/FirstRecordFormPage.tsx";
import { formPageStyle } from "../../auth/signup/SignupPage.styles.ts";
import RecordPdfFormPage from "../form/RecordPdfFormPage.tsx";

export interface Category {
  id: number;
  name: string;
}

const RecordWritePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  return (
    <div className={formPageStyle}>
      <TextHeader
        text={"기록 추가"}
        onClick={
          currentPage === 2
            ? () => setCurrentPage(1)
            : currentPage === 3
              ? () => setCurrentPage(2)
              : undefined
        }
      />
      {currentPage === 1 ? (
        <FirstRecordFormPage
          currentPage={1}
          totalPage={3}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onNext={() => setCurrentPage(2)}
        />
      ) : currentPage === 2 ? (
        <RecordPdfFormPage
          currentPage={2}
          totalPage={3}
          fileList={fileList}
          setFileList={setFileList}
          setTitle={setTitle}
          setContent={setContent}
          onNext={() => setCurrentPage(3)}
        />
      ) : (
        <SecondRecordFormPage
          currentPage={3}
          totalPage={3}
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
