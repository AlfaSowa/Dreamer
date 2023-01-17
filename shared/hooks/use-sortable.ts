import { useCallback, useState } from "react";

export type SortDirection = "asc" | "desc";
type SortByCallback = <T>(arr: T[], sortKey: string) => T[];

export const useSortable = () => {
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const compareObjectsByKey = <T>(
    key: string,
    ascending = true
  ): ((objectA: T, objectB: T) => number) => {
    return (objectA: T, objectB: T): number => {
      let sortValue: number;
      if (objectA[key] > objectB[key]) {
        sortValue = 1;
      } else if (objectA[key] < objectB[key]) {
        sortValue = -1;
      } else {
        sortValue = 0;
      }

      return ascending ? sortValue : -1 * sortValue;
    };
  };

  const sortBy = useCallback<SortByCallback>(
    (arr, sortKey) => {
      return arr.sort(compareObjectsByKey(sortKey, sortDirection === "asc"));
    },
    [sortDirection]
  );

  return {
    sortBy,
    setSortDirection,
  };
};
