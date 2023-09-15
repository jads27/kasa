import React from "react";
import RedStarIcon from "../assets/icons/star-red.svg";
import GreyStarIcon from "../assets/icons/star-grey.svg";

const Rating = ({rating}) => {
    const maxRating = 5;

    const redStars = Array(rating).fill(null);
    const greyStars = Array(maxRating - rating).fill(null);

    return (
        <div className="rating">
            {redStars.map((_, index) => (
                <img key={index} src={RedStarIcon}  />
            ))}
            {greyStars.map((_, index) => (
                <img key={index + rating} src={GreyStarIcon} />
            ))}
        </div>
    )
};

export default Rating;
