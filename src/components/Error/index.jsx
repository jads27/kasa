import React from 'react';
import {NavLink} from "react-router-dom";
import Header from '../Header';
import Footer from '../Footer';

const Error = () => {
    return (
        <div>
             <Header />
             <main className="error">
            <p>404</p>
            <p>Oups ! La page que vous demandez n'existe pas.</p>
            <NavLink to="/">Retournez sur la page d'accueil</NavLink>
            </main>
            <Footer />
        </div>
    );
};

export default Error;