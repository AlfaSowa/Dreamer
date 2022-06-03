import Link from "next/link";
import { FC } from "react";

interface ISidebarItem {
  link?: string;
}

export const SidebarItem: FC<ISidebarItem> = ({ children, link }) => (
  <li>
    {!link && <div>{children}</div>}

    {link && (
      <Link href={link}>
        <a className="block">{children}</a>
      </Link>
    )}
  </li>
);

SidebarItem.defaultProps = {
  link: null,
};
