type TaskTextContent = {
  type: "text";
  data: string;
};

type TaskSelect = {
  id: string;
  name: string;
};

type TaskModuleContent = {
  type: "module";
  data: {
    type: "select";
    result: string; // сравнивается с TaskSelect.id
    componentData: TaskSelect[];
  };
};

export interface Task {
  id: string;
  content: Array<TaskTextContent | TaskModuleContent>;
}

export interface Project {
  id: string;
  dateStart: string;
  dateEnd: string;
  theme: {
    id: number;
    name: string;
  };
  subtheme: {
    id: number;
    name: string;
  };
}
