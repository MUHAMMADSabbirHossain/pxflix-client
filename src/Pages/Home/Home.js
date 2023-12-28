import React from 'react';
import Landing from './Landing';
import HomeFreeMovies from './HomeFreeMovies/HomeFreeMovies';
import HomeTvShows from './HomeTvShows/HomeTvShows';
import Trailers from './HomeTrailers/Trailers';

const Home = () => {
    return (
        <div>
            <Landing></Landing>
            <HomeFreeMovies></HomeFreeMovies>
            <HomeTvShows></HomeTvShows>
            <Trailers></Trailers>
        </div>
    );
};

export default Home;