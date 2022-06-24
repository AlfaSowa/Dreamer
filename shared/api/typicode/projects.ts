import { AxiosResponse } from "axios";
import { Axios } from "../../../service/axios";
import { Project } from "./models";

export const getProjectsList = async (): Promise<Project[]> => {
  try {
    const { data, status }: AxiosResponse<Project[]> = await Axios.get(
      "/projects"
    );

    if (status === 200) {
      return data;
    }
  } catch (err) {
    console.log("Error from getAccountContext ===", err);
  }

  return [];
};
