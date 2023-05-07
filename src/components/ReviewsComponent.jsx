import React, { useState } from "react";
import like from "../utilities/images/like.png";
import dislike from "../utilities/images/dislike.png";
import comment from "../utilities/images/comment.png";
import view from "../utilities/images/viewcomment.png";
import Comment from "./Comment";
import Replies from "./Replies";

function ReviewsContainer({
  movie_id,
  user_id,
  user_email,
  review,
  dislike_count,
  like_count,
}) {
  const [state, setState] = useState(false);

  return (
    <>
      <div>
        <div className="review">
          <span className="username">Posted by {user_email}</span>
          <div className="content mt-3">
            {review}
          </div>
          <div className="like_container">
            <div className="like mr-3">
              <div style={{ marginRight: "5px" }}>
                <img src={like} height="18" alt="" srcset="" />
              </div>
              <div>10</div>
            </div>

            <div className="like">
              <div style={{ marginRight: "5px" }}>
                <img src={dislike} height="18" alt="" srcset="" />
              </div>
              <div>18</div>
            </div>

            <div className="like">
              <div style={{ marginRight: "5px" }}>
                <img src={comment} height="18" alt="" srcset="" />
              </div>
              <div onClick={() => setState(!state)}>comment</div>
            </div>

            <div className="like">
              <div style={{ marginRight: "5px" }}>
                <img src={view} height="18" alt="" srcset="" />
              </div>
              <div>view replies</div>
            </div>
          </div>
          {state === true ? <Comment /> : ""}
        </div>

        {/* comment */}
        {/* <Replies /> */}
      </div>
    </>
  );
}

export default ReviewsContainer;
