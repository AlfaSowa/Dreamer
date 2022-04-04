import Link from "next/link";
import { FC, memo } from "react";
import { IDream } from "../../../interfaces/dreamersTypes";
import styles from "./styles.module.scss";

interface IDreamsCard {
  item: IDream;
  parentLink: string;
}

const DreamsCard: FC<IDreamsCard> = ({ item, parentLink }) => (
  <div className={styles.root}>
    <Link href={`/dreamstypes/${parentLink}/${item.id}`}>
      <a className={styles.link}>
        <div className={styles.content}>{item.name}</div>
        <div className={styles.progress}>
          <div
            className={styles.bar}
            style={{ width: `${Math.random() * 100}%` }}
          />
        </div>
      </a>
    </Link>
  </div>
);

export default memo(DreamsCard);
