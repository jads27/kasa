import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import SlideShow from "./SlideShow";
import Collapse from "./Collapse";
import Rating from "./Rating";
import Error from "./Error"

const CardDetails = () => {
    const {id} = useParams();
    const [cardData, setCardData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("logements.json")
        .then((res) => {
            const data = res.data;
            const card = data.find((card) => card.id === id);
            card ? setCardData(card) : "";
            setLoading(false)
        })
        .catch ((error) => {
            console.error("Error fetching JSON data", error)
        })
    }, [id]);

    return (
        <div>
            <Header />
            <main className="card-details">
                {!loading ? (
                    <React.StrictMode>
                        <SlideShow image={cardData.pictures} alt={cardData.title} />
                        <div className="content-wrapper-1">
                            <div className="title-content">
                                <h1>{cardData.title}</h1>
                                <p>{cardData.location}</p>
                            </div>
                            <div className="host-content">
                                <div>
                                    <span>{cardData.host.name.split(" ")[0]}</span>
                                    <span>{cardData.host.name.split(" ")[1]}</span>
                                </div>
                                <img src={cardData.host.picture} />
                            </div>
                        </div>
                        <div className="content-wrapper-2">
                            <div className="tag-content">
                                {cardData.tags.map((tag, index) => (
                                    <span key={index}>{tag}</span>
                                ))}
                            </div>
                            <Rating rating={parseFloat(cardData.rating)}/>
                        </div>
                        <div className="content-wrapper-3">
                            <Collapse title="Description" content={cardData.description} />
                            <Collapse
                                title="Équipements"
                                content={cardData.equipments.map((equipment, index) => (
                                    <span key={index}>{equipment}</span>
                                ))}
                            />
                        </div>
                    </React.StrictMode>
                ) : <Error />}
            </main>
            <Footer />
        </div>
    );
};

export default CardDetails;