type Task = {
  id: string;
  name: string;
  description: string;
};

type Stage = {
  id: string;
  tasks: Task[];
};

export interface Project {
  id: number;
  name: string;
  description: string;
  dateStart: string;
  dateEnd: string;
  progress: number;
  stages: Stage[];
}
