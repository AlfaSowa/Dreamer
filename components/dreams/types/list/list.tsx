import { FC } from "react";
import styles from "./styles.module.scss";

const DreamsTypesList: FC = ({ children }) => (
  <div className={styles.root}>{children}</div>
);

export default DreamsTypesList;
