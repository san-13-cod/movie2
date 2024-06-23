import React, { useContext, useEffect, useState } from "react";
import "./mov.css";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import CountContext from "./CountContext";
import { useNavigate } from "react-router-dom";

function Movie() {
  scrollTo(0, 0);
  const navigate = useNavigate();
  let { id } = useParams();
  console.log(id);
  const { genresData } = useContext(CountContext);
  const movieName = genresData?.results.find((movie) => movie.id == id);
  const [movGenres, setMovGenres] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=610ad38e31b10ded3a03da82be273bb0`
      )
      .then((res) => {
        const backdropUrl = res.data.backdrops[1]?.file_path;
        setMovGenres(backdropUrl);
        // console.log(res.data.backdrops);
        // console.log(mov);
        // console.log(movieName);
      });
  }, []);
  return (
    <div
      className="mov"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(https://image.tmdb.org/t/p/original/${movGenres})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <button onClick={() => navigate(-1)} className="goBack">
        Go Back
      </button>
      {/* <NavLink to={`/genres`} className="goBack">
        Go Back
      </NavLink> */}
      <div className="moviez">
        <img
          src={`https://image.tmdb.org/t/p/w300/${movieName?.poster_path}`}
          alt="Movie Poster"
        />
        <div className="right">
          <h1>{movieName && movieName.title}</h1>
          <h6>⭐{movieName && movieName.vote_average}</h6>
          <p>{movieName && movieName.overview}</p>
          {/* <img src={picture} alt="" /> */}
        </div>
      </div>
    </div>
  );
}

export default Movie;
