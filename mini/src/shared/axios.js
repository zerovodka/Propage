import axios from "axios";
axios.defaults.withCredentials = true;

export const instance = axios.create({
  url: "http://1.224.63.113:8080/",
});

export const apis = {
  signup: (username, nickname, password, passwordCheck) =>
    instance.post("/user/signup", {
      username: username.current.value,
      nickname: nickname.current.value,
      password: password.current.value,
      passwordCheck: passwordCheck.current.value,
    }),

  login: (username, password) =>
    instance.post("/user/login", {
      username: username.current.value,
      password: password.current.value,
    }),
  logout: () =>
    instance.post("/user/logout", {
      token: res.headers.authorization,
    }),
};
