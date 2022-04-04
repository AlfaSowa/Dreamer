import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../../../components/header/header.component";
import DreamsPage from "../../../DreamerPages/dreams/dreams.component";
import { useDreams } from "../../../hooks/account/useDreams";
import PublicLayout from "../../../layouts/public/public.layout";

const DreamTypeById: NextPage = () => {
  const router = useRouter();
  const { currentDreamType, addCurrentDreams } = useDreams();

  useEffect(() => {
    if (router?.query?.id) {
      addCurrentDreams(String(router?.query?.id));
    }
  }, [addCurrentDreams, router]);

  return (
    <PublicLayout header={<Header title={currentDreamType?.name} />}>
      <DreamsPage />
    </PublicLayout>
  );
};

export default DreamTypeById;
