import Link from "next/link";
import { FC, memo } from "react";
import { IDreamtype } from "../../../interfaces/dreamersTypes";
import styles from "./styles.module.scss";

interface IDreamstypesCard {
  item: IDreamtype;
}

const DreamstypesCard: FC<IDreamstypesCard> = ({ item }) => (
  <div className={styles.root}>
    <Link href={`dreamstypes/${item.id}`}>
      <a className={styles.link}>
        <div className={styles.content}>{item.name}</div>
      </a>
    </Link>
  </div>
);

export default memo(DreamstypesCard);
