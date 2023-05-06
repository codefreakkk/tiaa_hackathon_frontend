import React from "react";
import pic from "../utilities/images/evil.jpg";
import star from "../utilities/images/star.png";

function Card() {
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
            <div className="rating">8.4</div>
          </div>
          <div className="movie_name">Guardians of the galaxy Vol. 3</div>
          <div className="view_more">
            <div className="view_more_cont">View</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
