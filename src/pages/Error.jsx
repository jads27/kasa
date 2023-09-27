import React from "react";
import {Link} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Error = () => {
    return (
        <div>
            <Header />
            <main className="error">
                <p>404</p>
                <p>Oups ! La page que vous demandez n'existe pas.</p>
                <Link to="/">Retournez sur la page d'accueil</Link>
            </main>
            <Footer />
        </div>
    );
};

export default Error;
