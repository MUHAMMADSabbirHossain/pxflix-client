import React from 'react';
import Landing from './Landing/Landing';
import HomeFreeMovies from './HomeFreeMovies/HomeFreeMovies';
import HomeTvShows from './HomeTvShows/HomeTvShows';
import Trailers from './HomeTrailers/Trailers';
import HomeWebSeries from './HomeWebSeries/HomeWebSeries';

const Home = () => {
    return (
        <div>
            <Landing></Landing>
            <HomeFreeMovies></HomeFreeMovies>
            <HomeTvShows></HomeTvShows>
            <Trailers></Trailers>
            <HomeWebSeries></HomeWebSeries>
        </div>
    );
};

export default Home;