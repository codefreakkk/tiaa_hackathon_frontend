import { React, useEffect, useState } from "react";
import "../utilities/css/style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [loginState, setLoginState] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      setLoginState(true);
    }
  }, []);

  function handleLogout() {
    localStorage.clear();
    window.location.href = "/"
  }

  return (
    <>
      <nav
        class="navbar navbar-expand-lg bg"
        style={{ backgroundColor: "rgba(0,0,0,0.93)" }}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            {/* Navbar */}
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="center">
              <div>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <div className="logo">
                      <div className="logo_inner">MVDb</div>
                    </div>
                  </li>
                  <li class="nav-item">
                    <input
                      class="form-control search"
                      type="search"
                      placeholder="Search MVDb"
                      style={{ width: "80vh" }}
                      aria-label="Search"
                    />
                  </li>
                  <li class="nav-item">
                    <div className="list">
                      <span style={{ color: "white" }}>MVDb</span>
                      <span style={{ color: "rgb(87,153,239)" }}>Movies</span>
                    </div>
                  </li>
                  <li class="nav-item">
                    <div className="sidebar"></div>
                  </li>

                  <li class="nav-item">
                    {loginState === true ? (
                        <div className="signin" onClick={handleLogout}>Logout</div>
                    ) : (
                      <Link to={"/signin"} style={{ textDecoration: "none" }}>
                        <div className="signin">Sign In</div>
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
