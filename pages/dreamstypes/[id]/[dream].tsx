import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import Header from "../../../components/header/header.component";
import DreamPage from "../../../DreamerPages/dream/dream.component";
import { useDreams } from "../../../hooks/account/useDreams";
import PublicLayout from "../../../layouts/public/public.layout";

const DreamTypeById: NextPage = () => {
  const router = useRouter();
  const { currentDreamType, addCurrentDreams } = useDreams();

  const currentDream = useMemo(
    () =>
      currentDreamType?.children.find(
        (dream) => dream.id === router?.query?.dream
      ),
    [currentDreamType?.children, router?.query?.dream]
  );

  useEffect(() => {
    if (router?.query?.id) {
      addCurrentDreams(String(router?.query?.id));
    }
  }, [addCurrentDreams, router]);

  return (
    <PublicLayout header={<Header title={currentDream?.name} />}>
      <DreamPage />
    </PublicLayout>
  );
};

export default DreamTypeById;
