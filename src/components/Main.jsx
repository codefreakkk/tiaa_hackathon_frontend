import { React, useEffect, useState } from "react";
import HomeHeader from "./HomeHeader";
import Card from "./Card";
import axios from "axios";

const Main = () => {
  const [movieData, setMovieData] = useState([]);
  const [state, setState] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/gethighratedmovies")
      .then((res) => {
        // console.log(res.data.data);
        setMovieData(res.data.data);
        setState(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="main">
        <HomeHeader />
        <div class="container">
          <div className="wm_header mt-4 mb-4">
            <div className="wm_stick"></div>
            <div className="wm_title white mb-2">Highest Rated Movies</div>
          </div>
          <div class="row row-cols-6">
            {state === true
              ? movieData.map((data, index) => {
                  // console.log(data);
                  return (
                    <div class="col">
                      <Card
                        key={index}
                        id={data._id}
                        awards={data.awards}
                        box_collection={data.box_collection}
                        budget={data.budget}
                        cast={data.cast}
                        description={data.description}
                        director={data.director}
                        duration={data.duration}
                        genere={data.genere}
                        movie_name={data.movie_name}
                        poster={data.poster}
                        rating={data.rating}
                        release_date={data.release_date}
                        writer={data.writer}
                      />
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
