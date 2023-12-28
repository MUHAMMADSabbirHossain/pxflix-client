// import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import Home from './Pages/Home/Home';
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import FreeWebSeries from './Pages/FreeWebSeries/FreeWebSeries';
import FreeTvShows from './Pages/FreeTvShows/FreeTvShows';
import MovieHub from './Pages/MovieHub/MovieHub';
import Account from './Pages/Account/Account';
import FreeMovies from './Pages/FreeMovies/FreeMovies';
import { useState } from 'react';

function App() {
  const [dark, setDark] = useState(true);
  // console.log(dark);

  return (
    <div className="App" data-theme={dark ? "dark" : "light"}>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      < Navbar dark={dark} setDark={setDark} ></Navbar >

      <Routes>
        <Route path='/' element={<Home></Home>
        }></Route>
        <Route path='/free-movies' element={<FreeMovies></FreeMovies>}></Route>
        <Route path='/free-web-series' element={<FreeWebSeries></FreeWebSeries>}></Route>
        <Route path='/free-tv-shows' element={<FreeTvShows></FreeTvShows>}></Route>
        <Route path='/movie-hub' element={<MovieHub></MovieHub>}></Route>
        <Route path='/account' element={<Account></Account>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
      </Routes>

      <Footer></Footer>

    </div >
  );
}

export default App;
