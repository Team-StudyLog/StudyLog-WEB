import { SyncLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className={`flex w-full h-dvh items-center justify-center`}>
      <SyncLoader color={"#44D496"} />
    </div>
  );
};

export default Loading;
