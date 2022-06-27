import { NextPage } from "next";
import PublicLayout from "../layouts/public.layout";
import { useProjects } from "../shared/hooks";

const Home: NextPage = () => {
  const { projects } = useProjects();

  console.log("Home page>>>", projects);
  return (
    <PublicLayout>
      <div>123</div>
      <div>123</div>
      <div>123</div>
    </PublicLayout>
  );
};

export default Home;
