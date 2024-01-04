import React from 'react';
import { cardDetails } from '../../../Assets/carousel-config';
import CarouselItem from '../CarouselItem/CarouselItem';
import "./AutoPlayCarouselRightToLeft.css";

const AutoPlayCarouselRightToLeft = () => {
    return (
        <div className="carousel-container">
            <div className="carousel-track carousel-track-top mb-1">
                {Object.keys(cardDetails).map((detailKey) => {
                    return (
                        <CarouselItem
                            imgUrl={cardDetails[detailKey].imgUrl}
                            imgTitle={cardDetails[detailKey].title}
                        ></CarouselItem>
                    );
                })}
                {Object.keys(cardDetails).map((detailKey) => {
                    return (
                        <CarouselItem
                            imgUrl={cardDetails[detailKey].imgUrl}
                            imgTitle={cardDetails[detailKey].title}
                        ></CarouselItem>
                    );
                })}
            </div>
        </div>
    );
};

export default AutoPlayCarouselRightToLeft;