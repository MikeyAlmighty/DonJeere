import Layout from "../components/Layout";
import { About } from "../components/sections/about/About";

const Home = () => (
  <Layout title="Don Jeere | Home">
    <span>
      <div className="container">
        <h1>Welcome to Don Jeere</h1>
      </div>
    </span>
    <About />
  </Layout>
);

export default Home;
