import { ReactNode, useMemo } from "react";
import { BaseCard } from "./base";
import { LinkCard } from "./link";

interface ICard {
  link?: string;
  children: ReactNode;
  onClick?: () => void;
}

export const Card = ({ children, link, onClick }: ICard) => {
  const isLink = useMemo(() => {
    return link && !onClick;
  }, [link, onClick]);

  return (
    <>
      {isLink && <LinkCard link={link}>{children}</LinkCard>}
      {!isLink && <BaseCard onClick={onClick}>{children}</BaseCard>}
    </>
  );
};

Card.defaultProps = {
  link: null,
  onClick: null,
};
