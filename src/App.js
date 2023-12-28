// import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import Home from './Pages/Home/Home';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
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

      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>
        }></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
