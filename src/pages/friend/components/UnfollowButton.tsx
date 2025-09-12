interface UnfollowButtonProps {
  onClick: () => void;
}

const UnfollowButton = ({ onClick }: UnfollowButtonProps) => {
  return (
    <button
      className="border border-gray-400 px-[9px] py-[6.5px] rounded-[6px]
    bg-white text-red font-body08-regular-12"
      onClick={onClick}
    >
      언팔로우
    </button>
  );
};

export default UnfollowButton;
