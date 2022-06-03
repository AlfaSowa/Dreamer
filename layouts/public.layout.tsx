import { FC } from "react";
import { DreamsSidebar } from "../features/dreams-sidebar";
import { NavigationSidebar } from "../features/navigation-sidebar";
import { Container } from "../shared/components";
import { MainBlock } from "../widgets/main";
import { Sidebar } from "../widgets/sidebar";

const PublicLayout: FC = ({ children }) => (
  <Container>
    <Sidebar>
      <NavigationSidebar />
      <DreamsSidebar />
    </Sidebar>

    <MainBlock>{children}</MainBlock>
  </Container>
);

export default PublicLayout;
