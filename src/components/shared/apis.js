import axios from "axios";

const api = axios.create({
  baseURL: "http://13.125.132.120",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

const apiMultipart = axios.create({
  baseURL: "http://13.125.132.120",
  headers: {
    "content-type":
      "multipart/form-data; boundary=----WebKitFormBoundaryfApYSlK1ODwmeKW3",
  },
});
//
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
  getPost: () => api.get("/posts"),
  // writePost: api.post("", {}),
  // updatePost: api.put("", {}),
  // // deletePost: api.del("", {}),

  // //댓글
  getComment: (postId) => api.get(`/posts/${postId}/comments`, {}),
  addComment: (postId, content) =>
    api.post(`/posts/${postId}/comments`, { content }),
  // updateComment: api.put("", {}),
  // // deleteComment: api.del("", {}),

  //좋아요
  changeLike: (postId) => api.post("/posts/likes", { postId }),
};

export const apisMultipart = {
  addPost: (formdata) => apiMultipart.post("/posts", { formdata }),
};
