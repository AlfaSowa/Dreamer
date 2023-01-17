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
  id: string;
  name: string;
  description: string;
  dateStart: string;
  dateEnd: string;
  progress: number;
  stages: Stage[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  lastLoginAt: Date;
}
