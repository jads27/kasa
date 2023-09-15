import React, {useState} from "react";
import LeftArrowIcon from "../assets/icons/left-arrow.svg";
import RightArrowIcon from "../assets/icons/right-arrow.svg";

const SlideShow = ({image, alt}) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const previousSlide = () => {
        setCurrentSlideIndex((index) => {
            return index === 0 ? image.length - 1 : index - 1;
        });
    };

    const nextSlide = () => {
        setCurrentSlideIndex((index) => {
            return index === image.length - 1 ? 0 : index + 1;
        });
    };

    return (
        <div className="carousel">
            <img className="current-slide" src={image[currentSlideIndex]} alt={alt} />
            {image.length > 1 ? (
                <React.StrictMode>
                    <button className="left-arrow" onClick={previousSlide}>
                        <img src={LeftArrowIcon} alt="Précédent" />
                    </button>
                    <button className="right-arrow" onClick={nextSlide}>
                        <img src={RightArrowIcon} alt="Suivant" />
                    </button>
                    <p>
                        {currentSlideIndex + 1}/{image.length}
                    </p>
                </React.StrictMode>
            ) : (
                ""
            )}
        </div>
    );
};

export default SlideShow;
