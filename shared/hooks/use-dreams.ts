import { useStore } from "effector-react";
import { $dreams } from "../model/dreams";

const useDreams = () => {
  const dreams = useStore($dreams);

  return {
    dreams,
  };
};

export default useDreams;
