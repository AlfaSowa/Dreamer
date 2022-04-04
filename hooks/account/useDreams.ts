import { useStore } from "effector-react";
import { useCallback } from "react";
import { IDreamtype } from "../../interfaces/dreamersTypes";
import { $dreamersTypes, addDreamTypeFx } from "../../models/dreamerstypes";
import { $currentDreamType, addDreamsFx } from "../../models/dreams";

export const useDreams = () => {
  const dreamsTypes = useStore($dreamersTypes);
  const currentDreamType = useStore($currentDreamType);

  const addDreamType = useCallback((newDreamType: IDreamtype): void => {
    addDreamTypeFx(newDreamType);
  }, []);

  const addCurrentDreams = useCallback((dreamTypeId: string): void => {
    addDreamsFx(dreamTypeId);
  }, []);

  return {
    dreamsTypes,
    addDreamType,
    currentDreamType,
    addCurrentDreams,
  };
};
