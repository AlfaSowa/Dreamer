import { createEffect, createStore } from "effector";
import { typicodeApi } from "../api";
import { Project } from "../api/models";

export const getProjectsListFx = createEffect(() => {
  return typicodeApi.projects.getProjectsList();
});

export const $projects = createStore<Project[]>([]).on(
  getProjectsListFx.doneData,
  (_, payload) => payload
);
