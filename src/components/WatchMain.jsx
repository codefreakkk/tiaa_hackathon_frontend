import React from "react";

import MovieDetails from "./MovieDetails"
import TopCast from "./TopCast";
import Reviews from "./Reviews";

function WatchMain() {
  return (
    <>
      <div className="wm_main container">
        <TopCast/> 
        <MovieDetails/>

        <Reviews/>

      </div>
    </>
  );
}

export default WatchMain;
