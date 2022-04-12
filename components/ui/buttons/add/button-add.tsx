import { FC } from "react";
import AddIcon from "@mui/icons-material/Add";
import styles from "./styles.module.scss";
import { IButton } from "../interface";

const ButtonAdd: FC<IButton> = ({ onClick }) => (
  <button className={styles.root} onClick={onClick} type="button">
    <AddIcon />
  </button>
);

export default ButtonAdd;
