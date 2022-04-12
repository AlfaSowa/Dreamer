/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { useDreams } from "../../../../hooks/account/useDreams";
import styles from "./styles.module.scss";

interface IDreamsItemRow {
  rowId: any;
}
const DreamsItemRow: FC<IDreamsItemRow> = ({ children, rowId }) => {
  const { dreamsItemDetails } = useDreams();

  return (
    <div className={styles.root}>
      <div className={styles.cards}>{children}</div>
      {rowId === dreamsItemDetails?.parentId && (
        <div>
          <div>{dreamsItemDetails?.name}</div>
          <div>123123123</div>
          <div>123123123</div>
          <div>123123123</div>
          <div>123123123</div>
          <div>123123123</div>
          <div>123123123</div>
        </div>
      )}
    </div>
  );
};

export default DreamsItemRow;
