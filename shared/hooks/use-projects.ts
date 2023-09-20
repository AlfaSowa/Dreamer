import { useStore } from "effector-react";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import {
  $projects,
  addNewProjectFx,
  deleteProjectFx,
  getProjectsListFx,
} from "../../entities/project/model";

export const useProjects = () => {
  const router = useRouter();
  const { projects, isLoad } = useStore($projects);

  const getProjects = useCallback(() => {
    getProjectsListFx();
  }, []);

  const addNewProject = useCallback(() => {
    addNewProjectFx();
  }, []);

  const deleteProject = useCallback((projectId: string) => {
    deleteProjectFx(projectId);
  }, []);

  const currentProject = useMemo(() => {
    if (projects.length > 0 && router?.query?.id) {
      return projects.find((p) => p.id === router.query.id);
    }
    return null;
  }, [projects, router?.query?.id]);

  return {
    projects,
    getProjects,
    addNewProject,
    deleteProject,
    currentProject,
    isLoad,
  };
};
