import React from "react";

const Banner = ({isHome}) => {
    return (
        <div className={`banner ${isHome ? "is-home" : "is-about"}`}>
            <p>
                <span>Chez vous, </span>
                <span>partout et ailleurs</span>
            </p>
        </div>
    );
};

export default Banner;
