import Link from "next/link";
import { ReactNode } from "react";

interface ILinkCard {
  children: ReactNode;
  link: string;
}

export const LinkCard = ({ children, link }: ILinkCard) => {
  return (
    <Link href={link}>
      <a className="block flex-[0_0_calc(100%/4)] p-1">
        <div className="bg-blue-900 p-1 min-h-[60px]">{children}</div>
      </a>
    </Link>
  );
};
