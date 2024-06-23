import React, { useContext, useEffect, useState } from "react";
import CountContext from "./CountContext";
import SearchMovies from "./SearchMovies";
import axios from "axios";
function Search({ movieData }) {
  const {
    searchResults,
    handleNext,
    handlePrev,
    setSearchResults,
    val,
    datPage,
    namePage,
    setDatPage,
    page,
    setPage,
  } = useContext(CountContext);

  const handleNextPage = () => {
    setPage((val) => val + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // search();
    console.log(page);
  };

  const handlePrevPage = () => {
    setPage((val) => val - 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    console.log(page);
    // search();
  };

  useEffect(() => search(), [page]);

  function search() {
    namePage
      ? axios
          .get(
            `https://api.themoviedb.org/3/search/movie?query=${namePage}&api_key=610ad38e31b10ded3a03da82be273bb0&include_adult=false&page=${page}`
          )
          .then((res) => {
            setDatPage(res?.data);
            // console.log(res.data);
            // console.log(page);
            console.log(datPage);
            console.log(namePage);
          })
          .catch((error) => console.log(error))
      : "";
  }

  return (
    <div>
      <SearchMovies movieData={movieData} />
      {datPage?.total_pages > 1 ? (
        <div className={`pagination`}>
          <button
            className="prev"
            disabled={page <= 1}
            onClick={handlePrevPage}
          >
            Prev
          </button>
          <p className="pag">
            {page} of {datPage && datPage.total_pages} pages
          </p>
          <button
            className="nex"
            disabled={page >= datPage?.total_pages}
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      ) : (
        " "
      )}
    </div>
  );
}

export default Search;
