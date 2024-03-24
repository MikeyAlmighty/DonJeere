import Layout from "../components/Layout";

import { Landing } from "../components/sections/landing/Landing";
import { WhatWeDo } from "../components/sections/what-we-do/WhatWeDo";
import { Metrics } from "../components/sections/metrics/Metrics";
import { About } from "../components/sections/about/About";
import { Showcase } from "../components/sections/showcase/Showcase";
import { ContactUs } from "../components/sections/contact-us/ContactUs";
import { Convoy } from "../components/sections/convoy/Convoy";

const Home = () => (
        <Layout title="Don Jeere | Tractors">
            <Landing />
            <WhatWeDo />
            <Metrics />
            <About />
            <Showcase />
            <ContactUs />
            <Convoy />
        </Layout>
    );

export default Home;
