import React from 'react';
import Landing from './Landing';
import HomeFreeMovies from './HomeFreeMovies/HomeFreeMovies';
import HomeTvShows from './HomeTvShows/HomeTvShows';

const Home = () => {
    return (
        <div>
            <Landing></Landing>
            <HomeFreeMovies></HomeFreeMovies>
            <HomeTvShows></HomeTvShows>
        </div>
    );
};

export default Home;