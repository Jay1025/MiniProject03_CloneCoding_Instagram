import axios from "axios";

const api = axios.create({
  baseURL: "",
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

export const apis = {
  //로그인, 회원가입
  signUp: (id, fullname, username, pwd) =>
    api.post("/auth/signup", {
      email: id,
      fullname: fullname,
      username: username,
      password: pwd,
    }),
  signIn: (id, pwd) => api.post("/auth/login", { email: id, password: pwd }),

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
  mypage: api.get("", {}),
};
