const examplePages = {
  EXAMPLE: "/example",
};

const homePages = {
  HOMEPAGE: "/",
};

const myPages = {
  MYPAGE: "/mypage",
};

const authPages = {
  LOGINPAGE: "/login",
  KAKAO_REDIRECTION: "/oauth",
  GOOGLE_REDIRECTION: "/oauth/google/callback",
};

export default {
  ...examplePages,
  ...homePages,
  ...myPages,
  ...authPages,
};
