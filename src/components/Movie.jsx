import React, { useEffect, useState } from "react";
import "./mov.css";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
// import picture from "../../Images/noPicture.jpg";
// import picture from "../../Images/noPicture.jpg";
function Movie({ movieData }) {
  scrollTo(0, 0);
  let { id } = useParams();
  const movieName = movieData.find((movie) => movie.id == id);
  // console.log("Id is :" + id + movieData);
  // console.log(movieName + " is moviename");
  // console.log(movieData);
  const [mov, setMov] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=610ad38e31b10ded3a03da82be273bb0`
      )
      .then((res) => {
        const backdropUrl = res.data.backdrops[1]?.file_path;
        setMov(backdropUrl);
        // console.log(res.data.backdrops);
        // console.log(mov);
        // console.log(movieName);
      });
  }, []);
  return (
    <div
      className="mov"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(https://image.tmdb.org/t/p/original/${mov})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <NavLink to={"/"} className="goBack">
        Back to Home
      </NavLink>
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
