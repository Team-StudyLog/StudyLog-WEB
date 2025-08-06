const homePages = {
  HOMEPAGE: "/",
};

const mainPages = {
  CODE: "/:code",
  MAIN: "/:code",
  OTHER_USER: "/:code",
};

const recordPages = {
  RECORD: "/record",
  RECORD_DETAIL: "/record/:recordId",
  RECORD_EDIT: "/record/edit/:recordId",
  RECORD_WRITE: "/record/write",
  CATEGORY: "/category",
};

const quizPages = {
  QUIZ: "/quiz",
  QUIZ_DETAIL: "/quiz/:quizId",
};

const myPages = {
  MYPAGE: "/mypage",
  MYPAGE_EDIT: "/mypage/edit",
};

const authPages = {
  LOGINPAGE: "/login",
  KAKAO_REDIRECTION: "/oauth",
  GOOGLE_REDIRECTION: "/oauth/google/callback",
  SIGNUP: "/signup",
};

const alarmPages = {
  ALARM: "/alarm",
};

const friendPages = {
  FRIEND: "/friend",
  FRIEND_ADD: "/friend/add",
};

export default {
  ...homePages,
  ...mainPages,
  ...recordPages,
  ...quizPages,
  ...myPages,
  ...authPages,
  ...alarmPages,
  ...friendPages,
};
