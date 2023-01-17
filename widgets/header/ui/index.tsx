interface IHeader {
  title?: string;
}

export const Header = ({ title }: IHeader) => (
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
