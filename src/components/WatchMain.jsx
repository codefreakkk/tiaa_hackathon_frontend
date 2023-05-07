import React from "react";
import AddRating from "./AddRating"
import MovieDetails from "./MovieDetails";
import TopCast from "./TopCast";
import Reviews from "./Reviews";

function WatchMain({id, cast, awards, duration, genere, release_date }) {
  return (
    <>
      <div className="wm_main container">
        <MovieDetails
          release_date={release_date}
          duration={duration}
          awards={awards}
          genere={genere}
        />
        <TopCast cast={cast}/>
        <AddRating id={id}/>
        <Reviews />
      </div>
    </>
  );
}

export default WatchMain;
