import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Messages from "./components/Messages/Messages";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { inject } from '@vercel/analytics';
import axios from 'axios';
import MovieReviews from "./components/Movies/Movies";
import MovieReviewDetail from "./components/Movies/MovieReviewDetail";
import NotFound from "./components/NotFound/NotFound";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import Snake from "./components/Snake/Snake";
import Pictures from "./components/Pictures/Pictures";
import FishyComponent from "./components/Fishy/FishyComponent";
import Clipboard from "./components/Clipboard/Clipboard";

inject();

function App() {
  const [load, upadateLoad] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    // Log page view when the component mounts and on route changes
    const logPageView = () => {
      const page = location.pathname;
      
      if (page) {
        const url = `${process.env.REACT_APP_MAIN_ENDPOINT}?page=${page}`;

        axios
          .get(url)
          .catch((error) => {
            console.error(error);
          });
      } else {
        console.error("Page is undefined");
      }
    };
    
    
    // Log the initial page view when the component mounts
    logPageView();

    // Listen for route changes and log page views
    return () => {
      clearTimeout(timer);
    };
  }, [location]);

  return (
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/messages" element={<Messages />} /> 

        <Route path="/moviereviews" element={<MovieReviews />} />
        <Route path="/moviereviews/:title" element={<MovieReviewDetail />} />  

        
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/snake" element={<Snake />} />
        <Route path="/pictures" element={<Pictures />} />
        <Route path="/fishy" element={<FishyComponent />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/clipboard" element={<Clipboard />} />
      </Routes>
      {/* New routes */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
