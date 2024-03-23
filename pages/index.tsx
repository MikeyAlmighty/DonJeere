import Layout from "../components/Layout";

import { Landing } from "../components/sections/landing/Landing";
import { About } from "../components/sections/about/About";

const Home = () => (
  <Layout title="Don Jeere | Home">
    <Landing />
    <About />
  </Layout>
);

export default Home;
