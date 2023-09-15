import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Cards = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("logements.json").then((res) => setData(res.data));
    }, []);

    return (
        <div className="cards">
            {data.map((cards) => (
                <div key={cards.id}style={{backgroundImage: `url(${cards.cover})`}}>
                    <Link  to={`/housing/${cards.id}`}>
                    <span>{cards.title}</span>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Cards;
