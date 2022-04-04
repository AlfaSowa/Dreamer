import { NextPage } from "next";
import PublicLayout from "../layouts/public/public.layout";
import FrontPage from "../DreamerPages/frontpage/frontpage.component";
import Header from "../components/header/header.component";

const Home: NextPage = () => (
  <PublicLayout header={<Header />}>
    <FrontPage />
  </PublicLayout>
);

export default Home;
