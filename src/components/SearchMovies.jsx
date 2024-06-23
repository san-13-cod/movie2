import React, { useContext } from "react";
import CountContext from "./CountContext";
import { NavLink } from "react-router-dom";
import "./searchmovies.css";
import picture from "../../Images/noPicture.jpg";

function SearchMovies() {
  const { datPage } = useContext(CountContext);
  return (
    <div className="mainMovies">
      {datPage?.results.length > 1 ? (
        datPage?.results.map((item) => (
          <div key={item.id}>
            <NavLink to={`/search/${item.id}`}>
              <div className="movie">
                <img
                  src={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/w300/${item.poster_path}`
                      : picture
                  }
                  alt="Image not available"
                />
                <div>
                  <h4>{item.title}</h4>
                  <h5>{item.release_date}</h5>
                </div>
              </div>
            </NavLink>
          </div>
        ))
      ) : (
        <div className="noMatch">
          <h1>No Match Found</h1>
          <NavLink to={`/`}>Go to Home</NavLink>
        </div>
      )}
    </div>
  );
}

export default SearchMovies;
