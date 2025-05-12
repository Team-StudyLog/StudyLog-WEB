const LoginPage = () => {
  return (
    <>
      <div className={`flex flex-col h-screen justify-center items-center gap-4`}>
        <button className={`bg-amber-300 font-semibold rounded-lg px-4 py-2`}>카카오 로그인</button>
        <button className={`border border-gray-300 font-semibold rounded-lg px-4 py-2`}>구글로 로그인</button>
      </div>
    </>
  )
}

export default LoginPage;