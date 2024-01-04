import React from 'react';
import "./AutoPlayCarouselLeftToRight.css";
import CarouselItem from '../CarouselItem/CarouselItem';
import { cardDetails } from '../../../Assets/carousel-config';

const AutoPlayCarouselLeftToRight = () => {
    return (
        <div className="carousel-container mt-1">
            <div className="carousel-track carousel-track-buttom">
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

export default AutoPlayCarouselLeftToRight;