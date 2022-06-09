import { useStore } from "effector-react";
import { $projects } from "../model/projects";

const useProjects = () => {
  const projects = useStore($projects);

  return {
    projects,
  };
};

export default useProjects;
