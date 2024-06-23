import React, { useContext, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import picture from "../../Images/noPicture.jpg";
function SearchResult({ movieData }) {
  const [search, setSearch] = useState();
  let { id } = useParams();
  const [movSearch, setMovSearch] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=610ad38e31b10ded3a03da82be273bb0`
      )
      .then((res) => {
        const backdropUrl1 = res.data.backdrops[1]?.file_path;
        setSearch(backdropUrl1);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=610ad38e31b10ded3a03da82be273bb0`
      )
      .then((res) => {
        setMovSearch(res.data);
        // console.log(res.data);
      });
  }, [id]);

  return (
    <>
      <div
        className="mov"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(https://image.tmdb.org/t/p/original/${search})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "cover",
        }}
      >
        <NavLink to={"/search"} className="goBack">
          Back to Search
        </NavLink>
        <div className="moviez">
          <img
            src={
              movSearch?.poster_path
                ? `https://image.tmdb.org/t/p/w300/${movSearch?.poster_path}`
                : picture
            }
            alt="Movie Poster"
          />
          <div className="right">
            <h1>{movSearch?.title}</h1>
            <h6>⭐{movSearch?.vote_average}</h6>
            <p>{movSearch?.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchResult;
