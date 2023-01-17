import { createEffect, createStore } from "effector";
import { User } from "../../../shared/api/models";
import { typicodeApi } from "../../../shared/api";

const userInitial: User = {
  id: null,
  name: null,
  email: null,
  lastLoginAt: null,
};

export const fetchUserDataFx = createEffect(() => {
  return typicodeApi.user.fetchUserData();
});

export const $user = createStore<User>(userInitial);
