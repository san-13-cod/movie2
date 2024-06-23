import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Home from "./components/Home";
import Watchlist from "./components/Watchlist";
import About from "./components/About";
import Footer from "./components/Footer";
import Movie from "./components/Movie";
import Search from "./components/Search";
import CountContext from "./components/CountContext";
import SearchResult from "./components/SearchResult";
import WebSeries from "./components/WebSeries";
import GenreResult from "./components/GenreResult";
import MovieGenre from "./components/MovieGenre";
function App() {
  const [movieData, setMovieData] = useState([]);
  const countPage = useContext(CountContext);
  function movieFetch() {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=610ad38e31b10ded3a03da82be273bb0&language=en-US&page=${countPage.currentPage}&include_adult=false`
      )
      .then((res) => {
        setMovieData(res.data.results);
        // console.log(res.data.results);
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
        throw error;
      });
  }

  useEffect(() => movieFetch(), [countPage.currentPage]);

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              movieData={movieData}
              currentPage={countPage.currentPage}
              setCurrentPage={countPage.setCurrentPage}
              setMovieData={setMovieData}
              handleNext={countPage.handleNext}
              handlePrev={countPage.handlePrev}
            />
          }
        />
        <Route path={`:id`} element={<Movie movieData={movieData} />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/genres" element={<About />} />
        <Route path="/genres/:genre" element={<GenreResult />} />
        <Route path="/genre/:id" element={<MovieGenre />} />
        <Route path="/search" element={<Search />} />
        <Route path="/webSeries" element={<WebSeries />} />
        <Route
          path={`/search/:id`}
          element={<SearchResult movieData={movieData} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
