import { FC, memo } from "react";
import UserAuth from "../auth/user-auth";
import UserNoAuth from "../noauth/user-noauth";
import styles from "./styles.module.scss";

const UserMenu: FC = () => (
  <div className={styles.root}>
    <UserNoAuth />
    <UserAuth />
  </div>
);

export default memo(UserMenu);
