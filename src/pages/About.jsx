import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div>
            <Header />
            <main>
                <Banner isHome={false} />
            </main>
            <Footer />
        </div>
    );
};

export default About;
