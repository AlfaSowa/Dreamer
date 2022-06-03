import { FC } from "react";
import { MainSidebarNavigations } from "../features/main-sidebar-navigation";
import { Container } from "../shared/components";
import { MainBlock } from "../widgets/main";

const PublicLayout: FC = ({ children }) => (
  <Container>
    <MainSidebarNavigations />

    <MainBlock>{children}</MainBlock>
  </Container>
);

export default PublicLayout;
