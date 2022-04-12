import Link from "next/link";
import { FC } from "react";
import { IDreamtype } from "../../../../interfaces/dreamersTypes";
import styles from "./styles.module.scss";

interface IDreamstypesCard {
  item: IDreamtype;
}

const DreamsTypesCard: FC<IDreamstypesCard> = ({ item }) => (
  <div className={styles.root}>
    <Link href={`dreams/${item.id}`}>
      <a className={styles.link}>
        <div className={styles.content}>{item.name}</div>
      </a>
    </Link>
  </div>
);

export default DreamsTypesCard;
