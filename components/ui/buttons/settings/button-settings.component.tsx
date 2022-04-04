import { FC } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "./styles.module.scss";
import { IButton } from "../interface";

const ButtonSettings: FC<IButton> = ({ onClick }) => (
  <button className={styles.root} onClick={onClick} type="button">
    <MoreHorizIcon />
  </button>
);

export default ButtonSettings;
