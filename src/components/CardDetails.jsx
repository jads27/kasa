import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import SlideShow from "./SlideShow";
import Collapse from "./Collapse";

const CardDetails = () => {
    const {id} = useParams();
    const [cardData, setCardData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("logements.json").then((res) => {
            const data = res.data;
            const card = data.find((card) => card.id === id);
            card ? setCardData(card) : "";
            setLoading(false);
        });
    }, [id]);

    return (
        <div>
            <Header />
            <main>
                {!loading ? (
                    <div>
                        <img src={cardData.pictures[0]} />
                        <h1>{cardData.title}</h1>
                        <p>{cardData.host.name}</p>
                        <img src={cardData.host.picture} />
                        <p>{cardData.location}</p>
                        {cardData.tags.map((card, index) => (
                            <p key={index}>{card}</p>
                        ))}
                        <p>{cardData.rating}</p>
                        <Collapse title="Description" content={cardData.description} />
                        <Collapse
                            title="Équipements"
                            content={cardData.equipments.map((equipment, index) => (
                                <span key={index}>{equipment}</span>
                            ))}
                        />
                    </div>
                ) : (
                    ""
                )}
            </main>
            <Footer />
        </div>
    );
};

export default CardDetails;
