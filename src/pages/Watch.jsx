import { React, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import WatchHeader from "../components/WatchHeader";
import WatchMain from "../components/WatchMain";
import Footer from "../components/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";

function Watch() {
  const { id } = useParams();
  const [data, setMovieData] = useState([]);
  const [state, setState] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/getmoviebyid/${id}`)
      .then((res) => {
        console.log(res.data);
        setMovieData(res.data.data);
        setState(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      {state === true ? (
        <WatchHeader
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
      ) : (
        ""
      )}
      
      {state === true ? (
        <WatchMain
          id={data._id}
          cast={data.cast}
          release_date={data.release_date}
          duration={data.duration}
          awards={data.awards}
          genere={data.genere}
        />
      ) : (
        ""
      )}
      {/* <Footer/> */}
    </>
  );
}

export default Watch;
