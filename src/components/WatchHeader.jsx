import { React, useEffect, useState } from "react";
import star from "../utilities/images/star.png";
import blueStar from "../utilities/images/blue_border_star.png";
import image from "../utilities/images/guardians.jpg";
import AddRating from "./AddRating";

function WatchHeader({
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
}) {
  

  return (
    <>
      <div className="watch_container">
        <div className="container watch_inner">
          <div className="watch_header">
            <div className="watch_left">{movie_name}</div>
            <div className="watch_right flex">
              <div className="watch_info">
                <div className="gray_title">MVDb RATING</div>
                <div className="watch_info_inner flex">
                  <div className="star">
                    <img height="20" src={star} alt="" />
                  </div>
                  <div className="watch_rating">
                    <span
                      style={{
                        fontWeight: "700",
                        color: "white",
                        fontSize: "18px",
                      }}
                    >
                      {rating}
                    </span>
                    /10
                  </div>
                </div>
              </div>


              {/* <div className="watch_info mt-1">
                <div className="gray_title">YOUR RATING</div>
                <div className="watch_info_inner flex">
                  <div className="star">
                    <img height="20" src={blueStar} alt="" />
                  </div>
                  <div className="your_rating">
                    Rate
                  </div>
                </div>

              </div> */}

              
            </div>
          </div>

          {/* movie details */}
          <div className="movie_details_container">
            <div className="md_left">
              <div className="md_poster">
                <img className="md_poster" src={image} alt="" />
              </div>
            </div>
            <div className="md_right">
              <div className="md_title">
                Director <span className="name">{director}</span>
                <hr></hr>
              </div>
              <div className="md_title">
                Writer <span className="name">{writer}</span>
                <hr></hr>
              </div>
              <div className="md_title">
                Stars{" "}
                <span className="name">
                  {cast.map((data, index) => {
                    if (index == 4) return;
                    return data + ", ";
                  })}
                </span>
                <hr></hr>
              </div>
              <div className="md_title">
                Budget <span className="name">{budget}</span>
                <hr></hr>
              </div>
              <div className="md_title">
                Box Office Collection{" "}
                <span className="name">{box_collection}</span>
                <hr></hr>
              </div>
              <div className="description">{description}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WatchHeader;
