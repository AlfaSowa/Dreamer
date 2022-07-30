import { createEffect, createStore } from "effector";
import { typicodeApi } from "../../../shared/api";
import { Project } from "../../../shared/api/models";

type ProjectsStore = {
  projects: Project[];
  isLoad: boolean;
};

const ProjectsInitial: ProjectsStore = {
  projects: [],
  isLoad: false,
};

export const getProjectsListFx = createEffect(() => {
  return typicodeApi.projects.getProjectsList();
});

export const $projects = createStore<ProjectsStore>(ProjectsInitial).on(
  getProjectsListFx.doneData,
  (state, payload) => {
    return { ...state, projects: payload, isLoad: true };
  }
);
