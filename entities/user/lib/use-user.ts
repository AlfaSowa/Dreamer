import { useStore } from "effector-react";
import { $user, fetchUserDataFx } from "../model";
import { useCallback } from "react";

export const useUser = () => {
  const user = useStore($user);

  const getUserData = useCallback(() => {
    fetchUserDataFx();
  }, []);

  return {
    user,
  };
};
