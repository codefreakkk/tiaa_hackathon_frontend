import React from "react";
import user from "../utilities/images/user.png";

function TopCast({ cast }) {
  return (
    <>
      <div className="wm_header mt-5">
        <div className="wm_stick"></div>
        <div className="wm_title">Top cast</div>
      </div>
      <div className="cast">
        <div class="cast_inner">
          <div class="row row-cols-2">
            {cast.map((data) => {
              return (<div class="col mb-4">
              <div style={{ display: "flex" }}>
                <img
                  height="25"
                  className="cast_user"
                  src={user}
                  alt=""
                  srcset=""
                />
                <div>
                  <div className="cast_name">{data}</div>
                </div>
              </div>
            </div>)
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default TopCast;
