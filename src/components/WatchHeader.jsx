import React from "react";
import star from "../utilities/images/star.png";
import blueStar from "../utilities/images/blue_border_star.png";
import poster from "../utilities/images/guardians.jpg";

function WatchHeader() {
  return (
    <>
      <div className="watch_container">
        <div className="container watch_inner">
          <div className="watch_header">
            <div className="watch_left">Guardians of galaxy Vol. 3</div>
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
                      8
                    </span>
                    /10
                  </div>
                </div>
              </div>
              <div className="watch_info mt-1">
                <div className="gray_title">YOUR RATING</div>
                <div className="watch_info_inner flex">
                  <div className="star">
                    <img height="20" src={blueStar} alt="" />
                  </div>
                  <div className="your_rating">Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* movie details */}
          <div className="movie_details_container">
            <div className="md_left">
              <div className="md_poster">
                <img className="md_poster" src={poster} alt="" />
              </div>
            </div>
            <div className="md_right">
              <div className="md_title">
                Director <span className="name">Harsh said</span>
                <hr></hr>
              </div>
              <div className="md_title">
                Writer <span className="name">James Gunn</span>
                <hr></hr>
              </div>
              <div className="md_title">
                Stars{" "}
                <span className="name">
                  Chris Pratt, James Cooper, Tony Stark
                </span>
                <hr></hr>
              </div>
              <div className="md_title">
                Budget <span className="name">$773.3 million</span>
                <hr></hr>
              </div>
              <div className="md_title">
                Box Office Collection <span className="name">$900 million</span>
                <hr></hr>
              </div>
              <div className="description">
                Still reeling from the loss of Gamora, Peter Quill rallies his
                team to defend the universe and one of their own - a mission
                that could mean the end of the Guardians if not successful.
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WatchHeader;
