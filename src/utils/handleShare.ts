const handleShare = (code: string) => {
  const shareUrl = `https://studylog-nine.vercel.app/profile/${code}`;
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
    // Fallback for browsers that do not support the Web Share API
    const tempInput = document.createElement("input");
    tempInput.value = shareUrl;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("링크가 클립보드에 복사되었습니다!");
  }
};

export default handleShare;
