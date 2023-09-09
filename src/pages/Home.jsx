import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <Banner isHome={true} />
                <Cards />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
