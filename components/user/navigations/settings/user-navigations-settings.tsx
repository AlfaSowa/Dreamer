import { FC } from "react";
import UserListItem from "../../list/user-list-item";
import UserList from "../../list/user-list";

const SETTINGS_MENU = [
  {
    id: 1,
    name: "Профиль",
    link: "applicant",
  },
];

const UserSettingsMain: FC = () => (
  <UserList>
    {SETTINGS_MENU.map((i) => (
      <UserListItem link={i.link} key={i.id}>
        {i.name}
      </UserListItem>
    ))}

    {/* <UserListButton onClick={logout}>Выход</UserListButton> */}
  </UserList>
);

export default UserSettingsMain;
