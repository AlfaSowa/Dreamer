import Link from "next/link";
import { FC } from "react";

interface ISidebarItem {
  link?: string;
}

export const SidebarItem: FC<ISidebarItem> = ({ children, link }) => (
  <li>
    {!link && (
      <div className="flex items-center h-[30px] px-2 hover:bg-sky-700">
        {children}
      </div>
    )}

    {link && (
      <Link href={link}>
        <a className="flex items-center h-[30px] px-2 hover:bg-sky-700">
          {children}
        </a>
      </Link>
    )}
  </li>
);

SidebarItem.defaultProps = {
  link: null,
};
