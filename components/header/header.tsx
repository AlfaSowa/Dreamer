import { FC } from "react";
import { SITE_NAME } from "../../interfaces/constants";
import Container from "../lib/container/container";
import UserMenu from "../user/menu/user-menu";
import styles from "./styles.module.scss";

interface IHeader {
  title?: string;
}

const Header: FC<IHeader> = ({ title }) => (
  <header className={styles.root}>
    <Container alignCenter padding flex>
      <div className={styles.title}>
        <span>{title || SITE_NAME}</span>
      </div>

      <div className={styles.inner}>
        <UserMenu />
      </div>
    </Container>
  </header>
);

Header.defaultProps = {
  title: null,
};

export default Header;
