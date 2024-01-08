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

export const getProjectList = async () => {
  const response = await instance.get("/project/");
  return response.data;
};

export const getProjectDetail = async (id) => {
  const response = await instance.get(`/project/${id}/`);
  console.log("RESPONSE", response.data);
  return response.data;
};

export const createProject = async (data) => {
  const response = await instanceWithToken.post("/project/", data);
  if(response.status === 201){
    console.log("POST SUCCESS");
    const project_id = response.id;
  }else{
    console.log("[ERROR] error while creating project");
  }
  return response;

}

export const updateProject = async (id, data, navigate) => {
  const response = await instanceWithToken.put(`/project/${id}/`, data);
  if (response.status === 200) {
    console.log("PROJECT UPDATE SUCCESS");
  } else {
    console.log("[ERROR] error while updating project");
  }
};

export const deleteProject =  async (id, navigate) => {
  const response = await instanceWithToken.delete(`/project/${id}/`);
  if (response.status === 204) {
    console.log("PROJECT DELETE SUCCESS");
    navigate("/");
  } else {
    console.log("[ERROR] error while deleting project");
  }
};