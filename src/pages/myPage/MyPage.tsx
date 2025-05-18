const MyPage = () => {
  return (
    <div className={`flex flex-col h-screen`}>
      <h1 className={`flex p-4 justify-center`}>마이페이지</h1>
      <div
        className={`flex-1`}
        style={{ backgroundImage: "var(--color-green-400)" }}
      ></div>
    </div>
  );
};

export default MyPage;
