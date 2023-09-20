import { GetServerSideProps, NextPage } from "next";
import PublicLayout from "../../layouts/public.layout";
import { useProjects } from "../../shared/hooks";
import { TopBar } from "../../widgets/top-bar";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  console.log("params", params);

  // const project = typicodeApi.projects.getCurrentProject(params.id);

  return {
    props: {},
  };
};

const ProjectById: NextPage = () => {
  const { currentProject } = useProjects();

  console.log("currentProject", currentProject);

  return (
    <PublicLayout>
      <TopBar title={currentProject?.name} backArrow />
      12312321
    </PublicLayout>
  );
};

export default ProjectById;
