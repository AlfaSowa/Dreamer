import { createEffect, createEvent, createStore, sample } from "effector";
import { typicodeApi } from "../../../shared/api";
import { Project } from "../../../shared/api/models";

type ProjectsStore = {
  projects: Project[];
  isLoad: boolean;
};

const projectsInitial: ProjectsStore = {
  projects: [],
  isLoad: false,
};

export const getProjectsListFx = createEffect(() => {
  return typicodeApi.projects.getProjectsList();
});

export const addNewProjectFx = createEffect(() => {
  return typicodeApi.projects.addNewProject();
});

export const deleteProjectFx = createEffect((id: string) => {
  return typicodeApi.projects.deleteProject(id);
});

const updateProjectsList = createEvent();

export const $projects = createStore<ProjectsStore>(projectsInitial)
  .on(getProjectsListFx.doneData, (state, payload) => {
    return { ...state, projects: payload, isLoad: true };
  })
  .on(updateProjectsList, (state, payload) => {
    return payload;
  });

// добавление проекта в стор
sample({
  clock: addNewProjectFx.doneData,
  source: $projects,
  fn: (state, newProject) => {
    if (newProject) {
      return { ...state, projects: [...state.projects, newProject] };
    }
    return state;
  },
  target: updateProjectsList,
});

// удаление проекта из стора
sample({
  clock: deleteProjectFx.doneData,
  source: $projects,
  fn: (state, projectID) => {
    return {
      ...state,
      projects: state.projects.filter((p) => p.id !== projectID),
    };
  },
  target: updateProjectsList,
});
