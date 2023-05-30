import React from "react"
import { Link } from "react-router-dom"

function NavbarSecond() {
  return (
    <>
      <nav className="navbar navbar-expand-lg pt-4 animate__animated animate__fadeInDown">
        <div className="container container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-4 fw-semibold">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/"
                  style={{ color: "#2e266f" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/add-recipe"
                  style={{ color: "#2e266f" }}
                >
                  Add Recipe
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/profile"
                  style={{ color: "#2e266f" }}
                >
                  Profile
                </Link>
              </li>
              <li className="nav-item d-lg-none d-block">
                <Link
                  className="nav-link"
                  to="/login"
                  style={{ color: "#2e266f" }}
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavbarSecond
