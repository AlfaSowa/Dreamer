export interface IDream {
  name: string;
  id: string;
}

export interface IDreamtype {
  name: string;
  id: string;
  children: IDream[];
}
