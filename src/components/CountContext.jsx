import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
const CountContext = createContext(null);

const CountProvider = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [val, setVal] = useState();
  const [searchResults, setSearchResults] = useState();
  const [target, setTarget] = useState("");
  const [datPage, setDatPage] = useState();
  const [namePage, setNamePage] = useState();
  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState([]);
  const [genresPage, setGenresPage] = useState(1);
  const [genresData, setGenresData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=610ad38e31b10ded3a03da82be273bb0"
      )
      .then((res) => {
        console.log(res.data.genres);
        setGenres(res?.data?.genres);
      });
  }, []);

  const handleNextGenre = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setGenresPage((val) => val + 1);
  };

  const handlePrevGenre = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setGenresPage((val) => val - 1);
  };

  const handleNext = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setCurrentPage((val) => val + 1);
  };

  const handlePrev = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setCurrentPage((val) => val - 1);
  };

  function handleChange(e) {
    setVal(e.target.value);
    setTarget(e.target.value);
    setNamePage(e.target.value);
  }

  function handleClick(e) {
    val
      ? axios
          .get(
            `https://api.themoviedb.org/3/search/movie?query=${val}&api_key=610ad38e31b10ded3a03da82be273bb0&include_adult=false`
          )
          .then((res) => {
            setSearchResults(res?.data);
            setDatPage(res?.data);
            setPage(1);
            // console.log(res.data);
            // console.log(val);
          })
      : alert("No movie searched");
    setTarget("");
    setVal("");
  }

  useEffect(() => {
    setGenresPage(1);
  }, []);

  return (
    <CountContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        handleNext,
        handlePrev,
        target,
        setVal,
        handleClick,
        handleChange,
        searchResults,
        val,
        setSearchResults,
        datPage,
        setDatPage,
        namePage,
        page,
        setPage,
        genres,
        genresPage,
        handleNextGenre,
        handlePrevGenre,
        setGenresPage,
        genresData,
        setGenresData,
      }}
    >
      {props.children}
    </CountContext.Provider>
  );
};

export { CountProvider };
export default CountContext;
