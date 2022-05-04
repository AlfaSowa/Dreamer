/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { useDreams } from "../../../../hooks/account/useDreams";

interface IDreamsItemRow {
  rowId: any;
}
const DreamsItemRow: FC<IDreamsItemRow> = ({ children, rowId }) => {
  const { dreamsItemDetails } = useDreams();

  return (
    <div className="relative">
      <div className="grid grid-cols-3 grid-flow-row gap-2">{children}</div>

      {rowId === dreamsItemDetails?.parentId && (
        <div>
          <div>{dreamsItemDetails?.name}</div>
        </div>
      )}
    </div>
  );
};

export default DreamsItemRow;
