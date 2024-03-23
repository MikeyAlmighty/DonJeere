import Layout from "../components/Layout";

import { Landing } from "../components/sections/landing/Landing";
import { WhatWeDo } from "../components/sections/about/WhatWeDo";
import { Metrics } from "../components/sections/metrics/Metrics";
import { ContactUs } from "../components/sections/contact-us/ContactUs";

const Home = () => (
  <Layout title="Don Jeere | Home">
    <Landing />
    <WhatWeDo />
    <Metrics />
    <ContactUs />
  </Layout>
);

export default Home;
