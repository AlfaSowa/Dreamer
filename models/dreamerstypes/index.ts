import { createEvent, createStore } from "effector";
import { IDreamtype } from "../../interfaces/dreamersTypes";

export const addDreamTypeFx = createEvent<IDreamtype>();
export const $dreamersTypes = createStore<IDreamtype[]>([]).on(
  addDreamTypeFx,
  (state, data) => [...state, data]
);
