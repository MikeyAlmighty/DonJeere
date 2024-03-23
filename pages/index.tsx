import Layout from "../components/Layout";

import { Landing } from "../components/sections/landing/Landing";
import { WhatWeDo } from "../components/sections/what-we-do/WhatWeDo";
import { Metrics } from "../components/sections/metrics/Metrics";
import { About } from "../components/sections/about/About";
import { Showcase } from "../components/sections/showcase/Showcase";
import { ContactUs } from "../components/sections/contact-us/ContactUs";

const Home = () => (
  <Layout title="Don Jeere | Home">
    <Landing />
    <WhatWeDo />
    <Metrics />
    <About />
    <Showcase />
    <ContactUs />
  </Layout>
);

export default Home;
