import Link from "next/link";
import { FC } from "react";

interface ISidebarMenuItem {
  link?: string;
}

const SidebarMenuItem: FC<ISidebarMenuItem> = ({ children, link }) => (
  <li>
    {!link && <div>{children}</div>}

    {link && (
      <Link href={link}>
        <a className="block">{children}</a>
      </Link>
    )}
  </li>
);

SidebarMenuItem.defaultProps = {
  link: null,
};

export default SidebarMenuItem;
