import Link from "next/link";
import { ReactNode } from "react";

interface ICard {
  link?: string;
  children: ReactNode;
}

export const Card = ({ children, link }: ICard) => {
  if (link) {
    return (
      <Link href={link}>
        <a className="block flex-[0_0_calc(100%/4)] p-[4px]">
          <div className="bg-blue-900 p-1">{children}</div>
        </a>
      </Link>
    );
  }

  return (
    <div className="flex-[0_0_calc(100%/4)] p-[4px]">
      <div className="bg-red-400 p-1">{children}</div>
    </div>
  );
};

Card.defaultProps = {
  link: null,
};
