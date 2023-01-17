import { Avatar } from "../../../shared/components";
import { useUser } from "../lib/use-user";

export const UserCard = () => {
  const { user } = useUser();

  console.log(user);

  return (
    <div className="px-2">
      <Avatar />

      <div>Имя</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
    </div>
  );
};
