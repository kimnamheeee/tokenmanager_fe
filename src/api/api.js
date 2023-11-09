import { instance, instanceWithToken } from "./axios";

export const signIn = async (data) => {
  const response = await instance.post("/account/signin/", data);
  if (response.status === 200) {
    window.location.href = "/";
  } else {
    console.error(response);
  }
};

export const signUp = async (data) => {
  const response = await instance.post("/account/signup/", data);
  if (response.status === 200) {
    window.location.href = "/";
  }
  return response;
};
