import Link from "next/link";
import { FC, memo } from "react";
import styles from "./styles.module.scss";

const Logo: FC = ({ children }) => (
  <Link href="/">
    <a className={styles.root}>
      <span>{children}</span>
    </a>
  </Link>
);

export default memo(Logo);
