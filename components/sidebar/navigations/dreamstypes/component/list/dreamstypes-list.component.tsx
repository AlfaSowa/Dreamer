import { FC } from "react";
import styles from "./styles.module.scss";

const SidebarDreamtypesList: FC = ({ children }) => (
  <nav className={styles.root}>
    <ul>{children}</ul>
  </nav>
);

export default SidebarDreamtypesList;
