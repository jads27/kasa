import React, {useEffect, useState} from "react";
import axios from "axios";

const Cards = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("logements.json").then((res) => setData(res.data));
    }, []);

    return (
        <div className="cards">
            {data.map((cards) => (
                <figure key={cards.id} style={{backgroundImage: `url(${cards.cover})`}}>
                    <p>{cards.title}</p>
                </figure>
            ))}
        </div>
    );
};

export default Cards;
