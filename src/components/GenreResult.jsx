import React, { useContext, useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import axios from "axios";
import "./genreResult.css";
import CountContext from "./CountContext";
function GenreResult() {
  const { genre } = useParams();
  const {
    handleNextGenre,
    handlePrevGenre,
    genres,
    genresPage,
    setGenresPage,
    genresData,
    setGenresData,
  } = useContext(CountContext);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=610ad38e31b10ded3a03da82be273bb0&with_genres=${genre}&page=${genresPage}`
      )
      .then((res) => {
        setGenresData(res?.data);
        console.log(res?.data);
        console.log("Hello genresResult");
      })
      .catch((error) => console.log(error));
  }, [genresPage]);

  return (
    <div>
      <NavLink to={"/genres"}>
        <button className="goBack">Back to Genres</button>
      </NavLink>
      {/* <h2>Genre Name is : {genre || " Not FOund"}</h2> */}
      <div className="main">
        {genresData?.length <= 0 ? (
          <SpinnerCircular
            size={60}
            thickness={100}
            speed={100}
            color="#1cb153"
            secondaryColor="rgba(255,255, 255,0.5)"
            className="spinner"
          />
        ) : (
          genresData?.results.map((movie) => (
            <div key={movie.poster_path} className="movies">
              <NavLink to={`/genre/${movie.id}`}>
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
      <div className={`pagination`}>
        <button
          className="prev"
          disabled={genresPage <= 1}
          onClick={handlePrevGenre}
        >
          Prev
        </button>
        <p className="pag">
          {genresPage} of {genresData?.total_pages}
        </p>
        <button
          className="nex"
          disabled={genresPage >= 500}
          onClick={handleNextGenre}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default GenreResult;
