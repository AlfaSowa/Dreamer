import { useStore } from "effector-react";
import { useCallback } from "react";
import { $projects, getProjectsListFx } from "../model/projects";

const useProjects = () => {
  const projects = useStore($projects);

  const getProjects = useCallback(() => {
    getProjectsListFx();
  }, []);

  return {
    projects,
    getProjects,
  };
};

export default useProjects;
