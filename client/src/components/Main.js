import React from "react";
import SignUp from "./Signup";
import Login from "./Login";
import "../App.css";

export default function Main() {
  return (
    <div>
      <header data-bs-theme="dark">
        <div className="collapse text-bg-dark" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4>About</h4>
                <p className="text-body-secondary">
                  Add some information about the album below, the author, or any
                  other background context. Make it a few sentences long so
                  folks can pick up some informative tidbits. Then, link them
                  off to some social networking sites or contact information.
                </p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4>Contact</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-white">
                      Follow on Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Like on Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Email me
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-dark dkgreen-bkg shadow-sm">
          <div className="container">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <strong>KidzDirect</strong>
              <img></img>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarHeader"
              aria-controls="navbarHeader"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <a
                  href="/profile"
                  className="dkgreen-bkg text-white border-color-white"
                >
                  Profile
                </a>
              </span>
            </button>
          </div>
        </div>
      </header>
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto border border-5 rounded">
              <h1 className="fw-light">Bulletin Board</h1>
              <p className="lead text-body-secondary">
                Post your class messages here:
              </p>
              <p>
                <a href="/login" className="btn dkgreen-bkg my-2">
                  Login
                </a>
                <a href="/signup" className="btn btn-secondary my-2">
                  Signup
                </a>
              </p>
            </div>
          </div>
        </section>
        <div className="album py-5 dkgreen-bkg">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="100"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    {/* <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c" />
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text> */}
                  </svg>
                  <div className="card-body">
                    <p className="card-text">
                      Get your scout cookies from my daughter next Tuesday.
                      <br />
                      --Saul Nelson <br />
                      July 25, 2023
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Reply
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary"></small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="100"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    {/* <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c" />
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text> */}
                  </svg>
                  <div className="card-body">
                    <p className="card-text">
                      Anyone want to setup a playdate next Wednesday afternoon?
                      <br />
                      --Heidy Seals <br />
                      July 26, 2023
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary"></small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="100"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    {/* <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c" />
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text> */}
                  </svg>
                  <div className="card-body">
                    <p className="card-text">
                      Field trip to the zoo coming up. <br />
                      --Yousef Pressley <br />
                      July 28th, 2023
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary"></small>
                    </div>
                  </div>
                </div>
              </div>
              ​
              <div className="col">
                <div className="card shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="100"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    {/* <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c" />
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text> */}
                  </svg>
                  <div className="card-body">
                    <p className="card-text">
                      bus 37 blew a tire this morning so those kids will be
                      late.
                      <br /> --Selina Saxton,
                      <br /> August 1st, 2023
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Reply
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// external css (or styled objects)
// style it myself!!
// navbar diff color (cream color)
// app- dark background
// chakura ui - styled system/theme rgba numbers
// wrap with form control - inputs
