import axios from "axios";
import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddRating({ id }) {
  const navigate = useNavigate();

  const [rating, setRating] = useState("");
  const [alert, setAlert] = useState("Add rating out of 10");

  useEffect(() => {
    
    if (localStorage.getItem("token") != null) {
      let config = {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      };
      axios.get(`http://localhost:8000/api/v1/getmovieratedbyuser/${id}`, config)
      .then((res) => {
        const data = res.data;
        setRating(data.data.rating);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, []);

  function handleRate() {
    if (localStorage.getItem("token") == null) {
      navigate("/signin");
    }

    let config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    axios
      .post(
        "http://localhost:8000/api/v1/ratemovie",
        {
          movie_id: id,
          rating: rating,
        },
        config
      )
      .then((res) => {
        console.log(res.data);
        setAlert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div className="wm_header mt-5">
        <div className="wm_stick"></div>
        <div className="wm_title">Add Rating</div>
      </div>
      <div class="mb-5" style={{ width: "50%" }}>
        <label for="exampleFormControlTextarea1" class="form-label mt-2" style={{fontSize: "14px"}}>{alert}</label>
        <input
          type="number"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <button type="button" class="btn btn-warning mt-2" onClick={handleRate}>
          rate
        </button>
      </div>
    </>
  );
}

export default AddRating;
