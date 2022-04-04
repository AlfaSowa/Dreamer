import { FC } from "react";
import styles from "./styles.module.scss";

const DreamstypesList: FC = ({ children }) => (
  <div className={styles.root}>{children}</div>
);

export default DreamstypesList;
