export const sortWithComparator = <T,>(
  array: T[],
  comparator: (value: T) => number
): T[] => {
  return [...array].sort((a, b) => {
    const aTmp = comparator(a);
    const bTmp = comparator(b);
    return aTmp - bTmp;
  });
};
