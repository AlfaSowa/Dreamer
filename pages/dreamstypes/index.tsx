import { NextPage } from "next";
import Header from "../../components/header/header.component";
import DreamstypesPage from "../../DreamerPages/dreamstypes/dreamstypes.component";
import PublicLayout from "../../layouts/public/public.layout";

const DreamTypes: NextPage = () => (
  <PublicLayout header={<Header />}>
    <DreamstypesPage />
  </PublicLayout>
);

export default DreamTypes;
