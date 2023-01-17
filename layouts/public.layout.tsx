import { ReactNode } from "react";
import { Container } from "../shared/components";
import { MainBlock } from "../widgets/main";
import { Sidebar } from "../widgets/sidebar";

interface IPublicLayout {
  children: ReactNode;
}

const PublicLayout = ({ children }: IPublicLayout) => {
  return (
    <Container>
      <Sidebar />
      <MainBlock>{children}</MainBlock>
    </Container>
  );
};

export default PublicLayout;
