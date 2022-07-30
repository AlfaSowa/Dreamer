import { useStore } from "effector-react";
import { useCallback } from "react";
import { $projects, getProjectsListFx } from "../../entities/project/model";

const useProjects = () => {
  const { projects, isLoad } = useStore($projects);

  const getProjects = useCallback(() => {
    getProjectsListFx();
  }, []);

  return {
    projects,
    getProjects,
    isLoad,
  };
};

export default useProjects;
