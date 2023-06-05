import { sortWithComparator } from "./core";

export const sortNumbersArray = (array: number[]): number[] => {
  const comparator = (value: number): number => {
    return value;
  };

  return sortWithComparator<number>(array, comparator);
};
