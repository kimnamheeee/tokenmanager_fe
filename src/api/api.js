import { instance, instanceWithToken } from "./axios";
import { removeCookie } from "../utils/cookie";

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

export const signOut = async (token) => {
  const response = await instanceWithToken.post("/account/logout/", {
    refresh: token,
  });
  if (response.status === 204) {
    removeCookie("refresh_token");
    removeCookie("access_token");

    window.location.href = "/";
  } else {
    alert("오류로 인해 로그아웃할 수 없습니다.");
  }
};

export const getProjectList = async () => {
  const response = await instanceWithToken.get("/project/");
  // console.log("got response", response.data);
  return response.data;
};

export const getProjectDetail = async (id) => {
  // console.log("API CALLED", id);
  const response = await instance.get(`/project/${id}/`);
  // console.log("RESPONSE", response.data);
  return response.data;
};

export const createProject = async (data) => {
  const response = await instanceWithToken.post("/project/", data);
  if (response.status === 201) {
    console.log("POST SUCCESS");
    const project_id = response.id;
  } else {
    console.log("[ERROR] error while creating project");
  }
  return response.data;
};

export const updateProject = async (id, data, navigate) => {
  const response = await instanceWithToken.put(`/project/${id}/`, data);
  if (response.status === 200) {
    console.log("PROJECT UPDATE SUCCESS");
  } else {
    console.log("[ERROR] error while updating project");
  }
};

export const deleteProject = async (id, navigate) => {
  if (window.confirm("프로젝트를 삭제하시겠습니까?")) {
    const response = await instanceWithToken.delete(`/project/${id}/`);
    if (response.status === 204) {
      console.log("PROJECT DELETE SUCCESS");
      window.location.reload();
    } else {
      console.log("[ERROR] error while deleting project");
    }
  } else {
    return;
  }
};

export const getRequestList = async (data) => {
  const response = await instance.get("/request/", { params: data });
  return response.data;
};

export const createRequest = async (data) => {
  if (data) {
    let response;
    try {
      response = await instanceWithToken.post("/request/", data);
      if (response && response.status === 201) {
        return response.data;
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("내용을 작성해 주세요.");
      }
    }
  }
};

export const deleteRequest = async (id, navigate) => {
  const response = await instanceWithToken.delete(`/request/${id}/`);
  if (response.status === 204) {
    console.log("REQUEST DELETE SUCCESS");
    window.location.reload();
  } else {
    console.log("[ERROR] error while deleting request");
  }
};

export const createToken = async (data) => {
  const response = await instanceWithToken.post("/tokens/", data);
  if (response.status === 201) {
    console.log("POST SUCCESS");
  } else {
    console.log("[ERROR] error while creating token");
  }
  return response;
};

export const deleteToken = async (id, navigate) => {
  const response = await instanceWithToken.delete(`/tokens/${id}/`);
  if (response.status === 204) {
    console.log("TOKEN DELETE SUCCESS");
    window.location.reload();
  } else {
    console.log("[ERROR] error while deleting token");
  }
};

export const getTokenList = async (data) => {
  const response = await instance.get("/tokens/", { params: data });
  return response.data;
};

export const createTokenTime = async (data) => {
  const response = await instanceWithToken.post("/tokentime/", data);
  if (response.status === 201) {
    console.log("POST SUCCESS");
  } else {
    console.log("[ERROR] error while creating token time");
  }
  return response.data;
};

export const deleteTokenTime = async (id, navigate) => {
  const response = await instanceWithToken.delete(`/tokentime/${id}/`);
  if (response.status === 204) {
    console.log("TOKEN TIME DELETE SUCCESS");
    window.location.reload();
  } else {
    console.log("[ERROR] error while deleting token time");
  }
};

export const updateTokenTime = async (id, data, navigate) => {
  const response = await instanceWithToken.put(`/tokentime/${id}/`, data);
  if (response.status === 200) {
    console.log("TOKEN TIME UPDATE SUCCESS");
  } else {
    console.log("[ERROR] error while updating token time");
  }
  return response.data;
};

export const getTokenTimeList = async (data) => {
  const response = await instance.get("/tokentime/", { params: data });
  return response.data;
};
