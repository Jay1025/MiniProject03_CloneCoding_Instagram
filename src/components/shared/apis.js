import axios from "axios";

const api = axios.create({
  baseURL: "http://13.125.132.120",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

const apiMultipart = axios.create({
  baseURL: "",
  headers: {
    "content-type":
      "multipart/form-data; boundary=----WebKitFormBoundaryfApYSlK1ODwmeKW3",
  },
});

api.interceptors.request.use(function (config) {
  const accessToken = document.cookie.split("=")[1];
  config.headers.common["Authorization"] = `Bearer ${accessToken}`;
  return config;
});

apiMultipart.interceptors.request.use(function (config) {
  const accessToken = document.cookie.split("=")[1];
  config.headers.common["Authorization"] = `Bearer ${accessToken}`;
  return config;
});

export const apis = {
  //로그인, 회원가입
  signup: (id, fullname, username, pwd) =>
    api.post("/auth/signup", {
      email: id,
      fullname: fullname,
      username: username,
      password: pwd,
    }),
  login: (id, pwd) => api.post("/auth/login", { email: id, password: pwd }),

  //포스팅
  getPost: api.get("", {}),
  writePost: api.post("", {}),
  updatePost: api.put("", {}),
  // deletePost: api.del("", {}),

  //댓글
  getComment: api.get("", {}),
  writeComment: api.post("", {}),
  updateComment: api.put("", {}),
  // deleteComment: api.del("", {}),

  //마이페이지
  mypageInfo: api.get("/mypage/info", {}),
  mypagePosts: api.get("/mypage/posts", {}),
};

export const apisMultipart = {
  addPost: (formdata) => api.post("/posts", { formdata }),
};
