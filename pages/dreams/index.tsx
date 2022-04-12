import { NextPage } from "next";
import Header from "../../components/header/header";
import DreamsTypesPage from "../../DreamerPages/dreams/types/types";
import PublicLayout from "../../layouts/public/public.layout";

const DreamsTypes: NextPage = () => (
  <PublicLayout header={<Header />}>
    <DreamsTypesPage />
  </PublicLayout>
);

export default DreamsTypes;
