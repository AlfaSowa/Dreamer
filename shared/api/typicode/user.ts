import { AxiosResponse } from "axios";
import { Axios } from "../../../service/axios";
import { User } from "./models";

const PROJECTS_BASE_PATCH = "/auth";

export const fetchUserData = async (): Promise<User[]> => {
  try {
    const { data, status }: AxiosResponse<User[]> = await Axios.post(
      PROJECTS_BASE_PATCH
    );

    if (status === 200) {
      console.log("data", data);

      return data;
    }
  } catch (err) {
    console.log("Error from getAccountContext ===", err);
  }

  return [];
};
