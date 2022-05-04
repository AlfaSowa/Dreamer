import { FC } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { IButton } from "../interface";

const ButtonSettings: FC<IButton> = ({ onClick }) => (
  <button className="w-5 h-5 p-0" onClick={onClick} type="button">
    <MoreHorizIcon className="w-auto h-auto" />
  </button>
);

export default ButtonSettings;
