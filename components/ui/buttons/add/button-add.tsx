import { FC } from "react";
import AddIcon from "@mui/icons-material/Add";
import { IButton } from "../interface";

const ButtonAdd: FC<IButton> = ({ onClick }) => (
  <button
    className="w-5 h-5 p-0 rounded border border-black"
    onClick={onClick}
    type="button"
  >
    <AddIcon className="w-auto h-auto" />
  </button>
);

export default ButtonAdd;
