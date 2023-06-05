import Link from "next/link";
import { ReactNode } from "react";

interface ILinkCard {
  children: ReactNode;
  link: string;
}

export const LinkCard = ({ children, link }: ILinkCard) => {
  return (
    <Link href={link}>
      <a className="block bg-blue-900 p-1 min-h-[60px]">{children}</a>
    </Link>
  );
};
