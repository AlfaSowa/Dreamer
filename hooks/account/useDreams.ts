/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useStore } from "effector-react";
import { useCallback } from "react";
import { IDreamtype } from "../../interfaces/dreamersTypes";
import { $dreamersTypes, addDreamTypeFx } from "../../models/dreamerstypes";
import {
  $currentDreamType,
  $dreamsItemDetails,
  addDreamsFx,
  updateDreamsItemDetailsFx,
} from "../../models/dreams";

export const useDreams = () => {
  const dreamsTypes = useStore($dreamersTypes);
  const currentDreamType = useStore($currentDreamType);
  const dreamsItemDetails = useStore($dreamsItemDetails);

  const addDreamType = useCallback((newDreamType: IDreamtype): void => {
    addDreamTypeFx(newDreamType);
  }, []);

  const addCurrentDreams = useCallback((dreamTypeId: string): void => {
    addDreamsFx(dreamTypeId);
  }, []);

  const updateDreamsItemDetails = useCallback((details: any): void => {
    updateDreamsItemDetailsFx(details);
  }, []);

  return {
    dreamsTypes,
    addDreamType,
    currentDreamType,
    addCurrentDreams,
    updateDreamsItemDetails,
    dreamsItemDetails,
  };
};
