import { instance, instanceWithToken } from "./axios";

export const signIn = async (data) => {
  const response = await instance.post("/account/signin/", data);
  if (response.status === 200) {
    window.location.href = "/projects";
  } else {
    console.error(response);
  }
};

export const signUp = async (data) => {
  const response = await instance.post("/account/signup/", data);
  if (response.status === 200) {
    window.location.href = "/";
  } else {
    if (response.status === 400) {
      alert("이미 존재하는 아이디입니다.");
    }
  }
  return response;
};
