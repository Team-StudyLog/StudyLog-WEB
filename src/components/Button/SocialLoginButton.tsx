import IcGoogle from "../../assets/ic-google-logo.svg";
import IcKakao from "../../assets/ic-kakao-logo.svg";

interface SocialLoginButtonProps {
  type: "google" | "kakao";
  onClick: () => void;
}

const SocialLoginButton = ({ type, onClick }: SocialLoginButtonProps) => {
  return (
    <div
      className={`flex w-full justify-center items-center font-head03-bold-18
      py-[18px] rounded-[10px] cursor-pointer gap-x-[10px]
      ${type === "google" ? "bg-white" : "bg-kakao-yellow"}
      ${type === "google" ? "border border-gray-400" : "border-none"}`}
      onClick={onClick}
    >
      <img src={type === "google" ? IcGoogle : IcKakao} alt={type} />
      <p className={`text-gray-700`}>
        {type === "google" ? "구글로 로그인" : "카카오로 로그인"}
      </p>
    </div>
  );
};

export default SocialLoginButton;
