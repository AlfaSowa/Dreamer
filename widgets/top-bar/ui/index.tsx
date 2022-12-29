import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Typography } from "../../../shared/components";

interface ITopBar {
  title?: string;
  backArrow?: boolean;
  children?: ReactNode;
}

export const TopBar: FC<ITopBar> = ({ children, title, backArrow }) => {
  const router = useRouter();

  return (
    <div className="h-16 flex items-center gap-2 px-2 border-b-2 border-red-400">
      {backArrow && (
        <Button onClick={() => router.back()}>
          <ArrowBackIcon />
        </Button>
      )}

      {title && <Typography component="h1">{title}</Typography>}

      {children && <div className="flex items-center">{children}</div>}
    </div>
  );
};

TopBar.defaultProps = {
  title: null,
  backArrow: false,
  children: null,
};
