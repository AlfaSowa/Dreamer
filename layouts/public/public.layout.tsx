import { FC } from "react";
import SidebarDreamtypes from "../../components/sidebar/navigations/dreamstypes/dreamtypes.component";
import SidebarNavigationsMain from "../../components/sidebar/navigations/main/sidebar-navigations-main.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import MainBlock from "../../components/ui/main/main.component";
import { ILayout } from "../../interfaces/layouts";

type IPublicLayout = ILayout;

const PublicLayout: FC<IPublicLayout> = ({ children, header }) => (
  <>
    <Sidebar>
      {/* <SidebarNavigationsMain /> */}
      <SidebarDreamtypes />
    </Sidebar>

    <MainBlock header={header}>{children}</MainBlock>
  </>
);

export default PublicLayout;
