import { NavigationSidebar, ProjectsSidebar } from "../../../features/sidebar";
import { useToggleTheme } from "../../../shared/hooks";

export const Sidebar = () => {
  const { toggleTheme } = useToggleTheme();

  return (
    <div className="w-[230px] dr-light dark:dr-dark">
      <div className="flex flex-col gap-2 py-[8px]">
        {/* <UserCard /> */}
        <NavigationSidebar />
        <ProjectsSidebar />

        <button onClick={toggleTheme} type="button">
          СМЕНИТЬ ТЕМУ
        </button>
      </div>
    </div>
  );
};
