import { FC } from "react";
import { Typography } from "../../../shared/components";

interface ITopBar {
  title?: string;
}

const TopBar: FC<ITopBar> = ({ children, title }) => {
  return (
    <div className="min-h-[40px]">
      {title && (
        <Typography className="mb-2" component="h1">
          {title}
        </Typography>
      )}

      <div className="flex items-center">{children}</div>
    </div>
  );
};

TopBar.defaultProps = {
  title: null,
};

export default TopBar;
