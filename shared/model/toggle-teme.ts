import { createStore, createEvent } from "effector";

export const toggleThemeFx = createEvent();

export const $theme = createStore<"light" | "dark">("light").on(
  toggleThemeFx,
  (state, payload) => (state === "dark" ? "light" : "dark")
);
