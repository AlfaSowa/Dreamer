/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import clsx from "clsx";
import { FC, memo } from "react";
import styles from "./styles.module.scss";

interface IDreamCard {
  item: any;
  onClick: (elem: any) => void;
}

const DreamCard: FC<IDreamCard> = ({ item, onClick }) => (
  <div
    onClick={() => onClick(item)}
    className={clsx(styles.root, { [styles.close]: item?.close })}
  >
    <div>{item?.name || "Без имени"}</div>
  </div>
);

export default memo(DreamCard);
