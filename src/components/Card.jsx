import React from "react";
import pic from "../utilities/images/evil.jpg";
import star from "../utilities/images/star.png";
import { Link } from "react-router-dom";

const Card = ({
  id,
  awards,
  box_collection,
  budget,
  cast,
  description,
  director,
  duration,
  genere,
  movie_name,
  poster,
  rating,
  release_date,
  writer,
}) => {
  return (
    <>
      <div className="card_container">
        <div className="card_inner">
          <img src={pic} className="card_inner"></img>
        </div>
        <div className="bottom_section">
          <div className="rate">
            <div>
              <img src={star} height="15" alt="" srcset="" />
            </div>
            <div className="rating">{rating}</div>
          </div>
          <div className="movie_name">{movie_name}</div>
          <Link style={{ textDecoration: "none" }} to={`/watch/${id}`}>
            <div className="view_more">
              <div className="view_more_cont">View</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
