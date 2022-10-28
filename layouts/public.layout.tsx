import { FC, ReactNode } from "react";
import { NavigationSidebar, ProjectsSidebar } from "../features/sidebar";
import { Container } from "../shared/components";
import { MainBlock } from "../widgets/main";
import { Sidebar } from "../widgets/sidebar";

interface IPublicLayout {
  children: ReactNode;
}

const PublicLayout: FC<IPublicLayout> = ({ children }) => {
  return (
    <Container>
      <Sidebar>
        <NavigationSidebar />
        <ProjectsSidebar />
      </Sidebar>

      <MainBlock>{children}</MainBlock>
    </Container>
  );
};

export default PublicLayout;
