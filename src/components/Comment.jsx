import React from "react";

function Comment() {
  return (
    <>
      <div className="mt-3">
        <div
          class="alert alert-success alert-dismissible mt-4 fade show"
          role="alert"
        >
          Comment added successfully
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
        <div class="">
          <label for="exampleFormControlTextarea1" class="form-label comment">
            Add Reply
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <button type="button" class="btn btn-warning mt-2">
            Post
          </button>
        </div>
      </div>
    </>
  );
}

export default Comment;
