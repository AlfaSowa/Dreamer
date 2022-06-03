// import { createEvent, createStore, sample } from "effector";

import { createStore } from "effector";

// export const addDreamsFx = createEvent<string>();
// export const updateDreamsFx = createEvent<IDreamtype>();

// export const $currentDreamType = createStore<IDreamtype>(null).on(
//   updateDreamsFx,
//   (_, dreamType) => {
//     console.log("dreamType", dreamType);
//     return dreamType;
//   }
// );

// sample({
//   clock: addDreamsFx,
//   source: $dreamersTypes,
//   fn: (dreamsTypes: IDreamtype[], id: string) => {
//     const result = dreamsTypes.find((dream) => dream?.id === id);
//     if (result) {
//       return result;
//     }
//     return null;
//   },
//   target: updateDreamsFx,
// });

// // dreams item details
// export const updateDreamsItemDetailsFx = createEvent<any>();

// export const $dreamsItemDetails = createStore<any>(null).on(
//   updateDreamsItemDetailsFx,
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-return
//   (_, data) => data
// );

export interface IDream {
  id: number;
}

export const $dreams = createStore<IDream[]>([{ id: 1 }, { id: 2 }, { id: 3 }]);
