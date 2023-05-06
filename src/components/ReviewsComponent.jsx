import React, {useState} from "react";
import like from "../utilities/images/like.png";
import dislike from "../utilities/images/dislike.png";
import comment from "../utilities/images/comment.png";
import view from "../utilities/images/viewcomment.png";
import Comment from "./Comment"

function ReviewsContainer() {
  const [state, setState] = useState(false);

  return (
    <>
      <div>
        <div className="review">
          <span className="username">Posted by Harsh Said</span>
          <div className="content mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur quae laborum, voluptatem temporibus fugiat asperiores
            illo dolorum totam incidunt odit accusantium dignissimos sint dolore
            quasi iste aspernatur assumenda harum architecto sequi reprehenderit
            error? Molestiae beatae accusantium ducimus doloremque minima
            quibusdam debitis eos laborum, ipsa aspernatur quaerat odit amet
            veritatis ad.{" "}
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
        </div>

        {/* comment */}
        
        {state === true ? <Comment/> : ""}
      </div>
    </>
  );
}

export default ReviewsContainer;
