import React from "react";
import Movies from "./Movies";
function Home({
  movieData,
  currentPage,
  setCurrentPage,
  setMovieData,
  handlePrev,
  handleNext,
}) {
  return (
    <div>
      <Movies
        movieData={movieData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setMovieData={setMovieData}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </div>
  );
}

export default Home;
