import React, { useContext, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./genres.css";
import CountContext from "./CountContext";
import Action from "../../Images/Action.jpg";
import Adventure from "../../Images/Adventure.jpg";
import Animation from "../../Images/Animation.jpg";
import Comedy from "../../Images/Comedy.jpg";
import Crime from "../../Images/Crime.jpg";
import Documentary from "../../Images/Documentary.jpg";
import Drama from "../../Images/Drama.jpg";
import Family from "../../Images/Family.jpg";
import Fantasy from "../../Images/Fantasy.jpeg";
import History from "../../Images/History.jpg";
import Horror from "../../Images/Horror.jpg";
import Music from "../../Images/Music.jpg";
import Mystery from "../../Images/Mystery.jpg";
import Romance from "../../Images/Romance.jpg";
import Science_Fiction from "../../Images/ScienceFiction.jpg";
import Thriller from "../../Images/Thriller.jpg";
import Western from "../../Images/Western.jpg";
import War from "../../Images/War.jpg";
import TvMovie from "../../Images/TvSeries.jpg";

function About() {
  const { genres, setGenresPage } = useContext(CountContext);

  useEffect(() => {
    setGenresPage(1);
    // Fetch genres using axios or from context as per your app logic
    // Example: axios.get('/api/genres').then(response => setGenres(response.data));
  }, [setGenresPage]);

  // Mapping genre names to imported images
  const genreImages = {
    28: Action,
    12: Adventure,
    16: Animation,
    35: Comedy,
    80: Crime,
    99: Documentary,
    18: Drama,
    10751: Family,
    14: Fantasy,
    36: History,
    27: Horror,
    10402: Music,
    9648: Mystery,
    10749: Romance,
    878: Science_Fiction,
    53: Thriller,
    37: Western,
    10752: War,
    10770: TvMovie,
  };

  return (
    <div>
      <h1>ALL GENRES</h1>
      <div className="genres">
        {genres?.map(({ id, name }) => (
          <NavLink to={`/genres/${id}`} key={id}>
            <div className="genre">
              {/* <div className="overlay"> */}
              <h4>{name}</h4>
              <img src={genreImages[id]} alt={`${name} Genre`} />
              {/* </div> */}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default About;
