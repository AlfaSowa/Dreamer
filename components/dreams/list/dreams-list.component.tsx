import { FC } from "react";
import styles from "./styles.module.scss";

const DreamsList: FC = ({ children }) => (
  <div className={styles.root}>{children}</div>
);

export default DreamsList;
