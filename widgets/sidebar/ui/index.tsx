import { UserCard } from "../../../entities/user";
import { NavigationSidebar, ProjectsSidebar } from "../../../features/sidebar";

export const Sidebar = () => (
  <div className="w-[230px] bg-[color:var(--color-bg-add)]">
    <div className="flex flex-col gap-2 py-[8px]">
      <UserCard />
      <NavigationSidebar />
      <ProjectsSidebar />
    </div>
  </div>
);
