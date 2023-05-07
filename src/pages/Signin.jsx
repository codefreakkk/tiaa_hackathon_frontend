import { React, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState();
  const navigate = useNavigate();

  function handleSubmit() {
    axios
      .post("http://localhost:8000/api/v1/login", {
        u_email: email,
        u_password: password,
      })
      .then((res) => {
        console.log(res);
        if (res.data.success === true) {
          const data = res.data;
          localStorage.setItem("token", data.token);
          localStorage.setItem("email", data.u_email);
          navigate("/");
        } else {
          setAlert(true);
        }
      })
      .catch((err) => alert("Some error occured"));
  }

  return (
    <>
      <Navbar />
      <div className="container" style={{ width: "30%", padding: "50px 0" }}>
        <div>
          {alert === true ? (
            <div
              class="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              Please check your crediantials fields below.
            </div>
          ) : (
            ""
          )}
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="exampleInputPassword1"
          />
        </div>
        <button type="button" class="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}

export default Signin;
