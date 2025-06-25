const handleShare = (code: string) => {
  const shareUrl = `https://studylog-nine.vercel.app/${code}`;
  const shareText = "코드를 공유하고 StudyLog에 참여하세요!";

  if (navigator.share) {
    navigator
      .share({
        title: "StudyLog 코드 공유",
        text: shareText,
        url: shareUrl,
      })
      .catch((error) => console.error("Error sharing:", error));
  } else {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(shareUrl)
        .then(() => {
          alert("링크가 클립보드에 복사되었습니다!");
        })
        .catch((error) => {
          console.error("Error copying to clipboard:", error);
          alert("클립보드 복사에 실패했습니다. 수동으로 복사해주세요.");
        });
    } else {
      alert(
        "클립보드 복사가 지원되지 않는 브라우저입니다. 수동으로 복사해주세요."
      );
    }
  }
};

export default handleShare;
