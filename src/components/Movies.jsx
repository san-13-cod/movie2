import React from "react";
import "./movie.css";
// const api_Key = "610ad38e31b10ded3a03da82be273bb0";
import { SpinnerCircular } from "spinners-react";
import { NavLink } from "react-router-dom";

function Movies({ movieData, currentPage, handleNext, handlePrev }) {
  function handleClickPage(e) {
    console.log(e.target.value);
  }
  return (
    <>
      <div className="main">
        {movieData.length <= 0 ? (
          <SpinnerCircular
            size={60}
            thickness={100}
            speed={100}
            color="#1cb153"
            secondaryColor="rgba(255,255, 255,0.5)"
            className="spinner"
          />
        ) : (
          movieData.map((movie) => (
            <div key={movie.title} className="movies">
              <NavLink to={`/${movie.id}`}>
                <div className="movie">
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    alt="Image not"
                  />
                  <div>
                    <h4>{movie.title}</h4>
                    <h5>{movie.release_date}</h5>
                  </div>
                </div>
              </NavLink>
            </div>
          ))
        )}
      </div>
      {/* <div className="end">
        <div className="jump">
          <input type="number" />
          <button>Jump to</button>
        </div> */}
      <div className={`pagination ${movieData.length > 0 ? "add" : "remove"}`}>
        <button
          className="prev"
          disabled={currentPage <= 1}
          onClick={handlePrev}
        >
          Prev
        </button>
        <p className="pag">{currentPage} of 500 pages</p>
        <button
          className="nex"
          disabled={currentPage >= 500}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      {/* </div> */}
    </>
  );
}

export default Movies;
