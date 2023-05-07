import {React, useState} from 'react'
import like from "../utilities/images/like.png";
import dislike from "../utilities/images/dislike.png";
import comment from "../utilities/images/comment.png";
import view from "../utilities/images/viewcomment.png";
import Comment from './Comment';

function Replies() {
    const [state, setState] = useState(false);
  return (
    <>
        <div className="review">
          <span className="username">Replied by Harsh Said</span>
          <div className="content mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur quae laborum, voluptatem temporibus fugiat 
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

          </div>
        </div>
        
    </>
  )
}

export default Replies