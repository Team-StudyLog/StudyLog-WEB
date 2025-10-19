import { useState } from "react";
import pdfToText from "react-pdftotext";
import type { UploadProps, UploadFile } from "antd";
import { message, Upload } from "antd";
import { InboxOutlined, FilePdfOutlined } from "@ant-design/icons";
import {
  formContent,
  formHeaderWrapper,
} from "../../auth/signup/SignupPage.styles";
import BottomButton from "../../../components/Button/BottomButton";
import { summarizeText } from "../../../utils/summarizeText";

interface RecordPdfFormPageProps {
  currentPage: number;
  totalPage: number;
  fileList: UploadFile[];
  setFileList: (fileList: UploadFile[]) => void;
  setTitle: (title: string) => void;
  setContent: (content: string) => void;
  onNext: () => void;
}

const { Dragger } = Upload;

const RecordPdfFormPage = ({
  currentPage = 2,
  totalPage = 3,
  fileList,
  setFileList,
  setTitle,
  setContent,
  onNext,
}: RecordPdfFormPageProps) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const props: UploadProps = {
    name: "pdfFile",
    multiple: false,
    accept: ".pdf,application/pdf",
    maxCount: 1,
    fileList: fileList,
    beforeUpload(file) {
      const isPDF = file.type === "application/pdf";
      if (!isPDF) {
        message.error("PDF 파일만 업로드 가능합니다.");
        return Upload.LIST_IGNORE;
      }
      return false;
    },
    onChange(info) {
      setFileList(info.fileList);
      if (info.fileList.length > 0) {
        const file = info.fileList[0].originFileObj;
        if (file) {
          setIsProcessing(true);
          pdfToText(file).then((text) => {
            summarizeText(text)
              .then((result) => {
                setTitle(result.title);
                setContent(result.summary);
              })
              .catch(() => {
                message.error("PDF 추출에 실패했습니다.");
              })
              .finally(() => {
                setIsProcessing(false);
              });
          });
        }
      }
    },
    onRemove() {
      setFileList([]);
      setTitle("");
      setContent?.("");
      message.info("파일이 제거되었습니다.");
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <>
      <div className={formContent}>
        <div className={`${formHeaderWrapper} mb-[8px]`}>
          <p className={`text-gray-700`}>{currentPage}</p>
          <p className={`text-gray-400`}>/{totalPage}</p>
        </div>
        <p className={`text-gray-700 font-head02-bold-20 mb-[10px]`}>
          PDF 파일 첨부 (선택)
        </p>
        <p className={`text-gray-700 font-body05-medium-14 mb-[30px]`}>
          PDF 업로드 시 텍스트를 자동으로 분석 및 추출합니다.
        </p>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            {fileList.length > 0 ? (
              <FilePdfOutlined style={{ color: "#1890ff" }} />
            ) : (
              <InboxOutlined />
            )}
          </p>
          <p className="ant-upload-text">
            {fileList.length > 0
              ? `${fileList[0].name}`
              : "PDF 파일을 업로드해주세요."}
          </p>
          <p className="ant-upload-hint">
            {fileList.length > 0
              ? "다른 파일을 선택하려면 클릭하거나 드래그하세요."
              : "PDF 파일 업로드 시 텍스트를 자동으로 분석 및 추출합니다."}
          </p>
        </Dragger>
      </div>
      <BottomButton
        text={isProcessing ? "처리 중..." : "다음"}
        disabled={isProcessing}
        onClick={onNext}
      />
    </>
  );
};

export default RecordPdfFormPage;
