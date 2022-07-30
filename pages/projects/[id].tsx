import { NextPage } from "next";
import { useRouter } from "next/router";
import PublicLayout from "../../layouts/public.layout";
import { Button } from "../../shared/components";
import { TopBar } from "../../widgets/top-bar";

const ProjectById: NextPage = () => {
  const router = useRouter();

  return (
    <PublicLayout>
      <TopBar title="Проекты номер 1">
        <Button onClick={() => router.back()}>назад</Button>
      </TopBar>

      <div>1231231232</div>
    </PublicLayout>
  );
};

export default ProjectById;
