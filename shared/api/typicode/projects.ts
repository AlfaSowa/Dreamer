import { AxiosResponse } from "axios";
import { Axios } from "../../../service/axios";
import { Project } from "./models";

const PROJECTS_BASE_PATCH = "/projects";

export const getProjectsList = async (): Promise<Project[]> => {
  try {
    const { data, status }: AxiosResponse<Project[]> = await Axios.get(
      PROJECTS_BASE_PATCH
    );

    if (status === 200) {
      return data;
    }
  } catch (err) {
    console.log("Error from getAccountContext ===", err);
  }

  return [];
};

export const getCurrentProject = async (id: string): Promise<Project> => {
  try {
    const { data, status }: AxiosResponse<Project> = await Axios.get(
      `${PROJECTS_BASE_PATCH}/${id}`
    );

    if (status === 200) {
      return data;
    }
  } catch (err) {
    console.log("Error from getAccountContext ===", err);
  }

  return null;
};

export const addNewProject = async (): Promise<Project> => {
  try {
    const { data, status }: AxiosResponse<Project> = await Axios.post(
      PROJECTS_BASE_PATCH
    );
    if (status === 201) {
      return data;
    }
  } catch (err) {
    console.log("Error from getAccountContext ===", err);
  }

  return null;
};

export const deleteProject = async (id: string): Promise<string> => {
  try {
    const { status, data }: AxiosResponse<Project> = await Axios.delete(
      `${PROJECTS_BASE_PATCH}/${id}`
    );
    if (status === 200) {
      return id;
    }
  } catch (err) {
    console.log("Error from getAccountContext ===", err);
  }

  return null;
};
