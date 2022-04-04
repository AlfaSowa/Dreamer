import clsx from "clsx";
import { FC } from "react";
import styles from "./styles.module.scss";

interface IMainBlock {
  header?: JSX.Element;
}

const MainBlock: FC<IMainBlock> = ({ children, header }) => (
  <main className={clsx(styles.root, { [styles.withHeader]: header })}>
    {header}
    {children}
  </main>
);

MainBlock.defaultProps = {
  header: null,
};

export default MainBlock;
