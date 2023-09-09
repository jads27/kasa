import React from "react";

const Banner = ( {isHome} ) => {
    return (
        <div className={isHome ? "home-banner" : "about-banner"}>
            <p>Chez vous, partout et ailleurs</p>
        </div>
    );
};

export default Banner;
