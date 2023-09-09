import React from "react";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <header>
            <nav>
                <NavLink to="/">
                    <img src="logo.png" alt="Logo Kasa" />
                </NavLink>
                <ul>
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>A Propos</li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;