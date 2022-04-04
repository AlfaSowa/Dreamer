import { FC } from "react";
import styles from "./styles.module.scss";

const DreamList: FC = ({ children }) => (
  <div className={styles.root}>{children}</div>
);

export default DreamList;
