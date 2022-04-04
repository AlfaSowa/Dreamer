/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { AxiosResponse } from "axios";
import { Axios } from "../../service/axios";

export const getDreamsTypes = async (): Promise<void> => {
  try {
    const { data, status }: AxiosResponse<any> = await Axios.get("");

    if (status === 201) {
      console.log("getDreamsTypes", getDreamsTypes);
    }
  } catch (error) {
    console.log(error);
  }
};
