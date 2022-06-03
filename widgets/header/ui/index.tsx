import { FC } from "react";

interface IHeader {
  title?: string;
}

const Header: FC<IHeader> = ({ title }) => (
  <header>
    <div>
      <div>
        <span>{title}</span>
      </div>

      <div>12312312</div>
    </div>
  </header>
);

Header.defaultProps = {
  title: null,
};

export default Header;
