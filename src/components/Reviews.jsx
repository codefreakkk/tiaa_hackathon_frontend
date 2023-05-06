import React from "react";
import ReviewsComponent from "./ReviewsComponent"

function Reviews() {
  return (
    <>
      <div className="wm_header mt-5 mb-4">
        <div className="wm_stick"></div>
        <div className="wm_title">Reviews</div>
      </div>

      <div class="mb-5" style={{ width: "50%" }}>
        <label for="exampleFormControlTextarea1" class="form-label">
          Enter Review
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="4"
        ></textarea>
         <button type="button" class="btn btn-warning mt-2">Post</button>
      </div>

      {/* review */}
      <div className="mb-2 read">Read movie reviews</div>
      <ReviewsComponent/>
    </>
  );
}

export default Reviews;
