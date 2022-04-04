import { createEvent, createStore, sample } from "effector";
import { IDreamtype } from "../../interfaces/dreamersTypes";
import { $dreamersTypes } from "../dreamerstypes";

export const addDreamsFx = createEvent<string>();
export const updateDreamsFx = createEvent<IDreamtype>();
export const $currentDreamType = createStore<IDreamtype>(null).on(
  updateDreamsFx,
  (_, dreamType) => {
    console.log("dreamType", dreamType);
    return dreamType;
  }
);

sample({
  clock: addDreamsFx,
  source: $dreamersTypes,
  fn: (dreamsTypes: IDreamtype[], id: string) => {
    const result = dreamsTypes.find((dream) => dream?.id === id);
    if (result) {
      return result;
    }
    return null;
  },
  target: updateDreamsFx,
});
