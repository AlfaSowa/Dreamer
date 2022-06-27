import { createEffect, createStore } from "effector";
import { typicodeApi } from "../../../shared/api";
import { Project } from "../../../shared/api/models";

export const getProjectsListFx = createEffect(() => {
  return typicodeApi.projects.getProjectsList();
});

export const $projects = createStore<Project[]>([]).on(
  getProjectsListFx.doneData,
  (_, payload) => payload
);
