import IcRightArrow from "../../assets/ic-right-arrow.svg";
import type { ReactNode } from "react";

interface ButtonWithArrowProps {
  text: string;
  className: string;
  onClick: () => void;
  children?: ReactNode;
}

const ButtonWithArrow = ({
  text,
  className,
  onClick,
  children,
}: ButtonWithArrowProps) => {
  return (
    <div
      className={`flex w-full flex-col border border-gray-200 bg-white rounded-[10px] px-[15px] py-[16px]
      justify-between cursor-pointer`}
      onClick={onClick}
    >
      <div className={`flex w-full justify-between items-center`}>
        <p className={`text-gray-600 ${className}`}>{text}</p>
        <img src={IcRightArrow} alt="화살표 아이콘" />
      </div>
      {children && <div className={`mt-[8px]`}>{children}</div>}
    </div>
  );
};

export default ButtonWithArrow;
