import UnfollowButton from "./UnfollowButton.tsx";
import { useModalActions, useModalInfo } from "../../../hooks/useModal.ts";
import Modal from "../../../components/Modal/Modal.tsx";
import useEasyNavigate from "../../../hooks/useEasyNavigate.ts";
import type { FetchFriendResponse } from "../../../apis/mypage/useFetchFriendSearch.ts";
import { useDeleteUnfollow } from "../../../apis/mypage/useDeleteUnfollow.ts";

interface FriendItemProps {
  friend: FetchFriendResponse;
}

const FriendItem = ({ friend }: FriendItemProps) => {
  const { isOpen, content } = useModalInfo();
  const { openModal } = useModalActions();
  const { goOtherUserPage } = useEasyNavigate();
  const { mutate: unfollow } = useDeleteUnfollow();

  const handleUnfollow = () => {
    if (!content) return;
    unfollow(friend.id);
  };

  return (
    <div className={`flex w-full mt-[16px] justify-between items-center`}>
      <div className={`flex gap-x-[10px] items-center`}>
        <img
          src={friend.profileImage}
          alt={friend.nickname}
          className={`w-[46px] h-[46px] rounded-full object-cover`}
          onClick={() => goOtherUserPage(friend.code)}
        />
        <p className={`text-gray-700 font-body02-semibold-14`}>
          {friend.nickname}
        </p>
      </div>
      <UnfollowButton onClick={() => openModal({ name: friend.nickname })} />
      {isOpen && content && (
        <Modal
          title={"알림"}
          text={`${content.name}님을 언팔로우 하시겠습니까?`}
          onConfirm={handleUnfollow}
        />
      )}
    </div>
  );
};

export default FriendItem;
