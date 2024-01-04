import React from 'react';
import "./AutoPlayCarouselLeftToRight.css";
import CarouselItem from '../CarouselItem/CarouselItem';
import { cardDetails } from '../../../Assets/carousel-config';

const AutoPlayCarouselLeftToRight = () => {
    return (
        <div className="carousel-container mt-1">
            <div className="carousel-track carousel-track-buttom">
                {Object.keys(cardDetails).map((detailKey, index) => {
                    return (
                        <CarouselItem
                            imgUrl={cardDetails[detailKey].imgUrl}
                            imgTitle={cardDetails[detailKey].title}
                            key={index}
                        ></CarouselItem>
                    );
                })}
                {Object.keys(cardDetails).map((detailKey, index) => {
                    return (
                        <CarouselItem
                            imgUrl={cardDetails[detailKey].imgUrl}
                            imgTitle={cardDetails[detailKey].title}
                            key={index}
                        ></CarouselItem>
                    );
                })}
            </div>
        </div>
    );
};

export default AutoPlayCarouselLeftToRight;