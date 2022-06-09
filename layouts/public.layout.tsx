import { FC } from "react";
import { NavigationSidebar } from "../features/navigation-sidebar";
import { ProjectsSidebar } from "../features/projects-sidebar";
import { Container } from "../shared/components";
import { MainBlock } from "../widgets/main";
import { Sidebar } from "../widgets/sidebar";

const PublicLayout: FC = ({ children }) => (
  <Container>
    <Sidebar>
      <NavigationSidebar />
      <ProjectsSidebar />
    </Sidebar>

    <MainBlock>{children}</MainBlock>
  </Container>
);

export default PublicLayout;
