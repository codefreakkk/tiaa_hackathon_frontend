import { React, useEffect, useState } from "react";
import ReviewsComponent from "./ReviewsComponent";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// validate text field later
function Reviews({ id }) {
  const navigate = useNavigate();

  const [post, setPost] = useState("");
  const [alert, setAlert] = useState("");
  const [reviewData, setReviewData] = useState([]);
  const [reviewState, setReviewState] = useState(false);

  useEffect(() => {
    getAllReviews();
  }, [alert]);

  // get all reviews by moview id
  function getAllReviews() {
    axios
      .get(`http://localhost:8000/api/v1/getallreviewsbymovie/${id}`)
      .then((res) => {
        const data = res.data;
        setReviewData(data.data);
        setReviewState(true);
      })
      .catch((err) => console.log(err));
  }

  // handle post data
  function handlePost() {
    // if user not loggedin
    if (localStorage.getItem("token") == null) {
      navigate("/signup");
    }

    let config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    axios
      .post(
        "http://localhost:8000/api/v1/addreview",
        { movie_id: id, post, user_email: localStorage.getItem("email") },
        config
      )
      .then((res) => {
        setAlert(res.data.message);
      })
      .catch((err) => console.log(err));
      setPost("")
  }

  return (
    <>
      <div className="wm_header mt-5">
        <div className="wm_stick"></div>
        <div className="wm_title">Reviews</div>
      </div>

      <div class="mb-5" style={{ width: "50%" }}>
        <label for="exampleFormControlTextarea1" class="form-label mt-3">
          {alert}
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          placeholder="Enter your review"
          onChange={(e) => setPost(e.target.value)}
          value={post}
          rows="4"
        ></textarea>
        <button type="button" class="btn btn-warning mt-2" onClick={handlePost}>
          Post
        </button>
      </div>

      {/* review */}
      <div className="mb-2 read">Read movie reviews</div>
      {reviewState === true
        ? reviewData.map((data) => {
            console.log(data);
            return (
              <ReviewsComponent
                movie_id={data.movie_id}
                user_id={data.user_id}
                user_email={data.user_email}
                review={data.review}
                dislike_count={data.dislike_count}
                like_count={data.like_count}
              />
            );
          })
        : ""}
    </>
  );
}

export default Reviews;
