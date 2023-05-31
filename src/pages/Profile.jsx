import React from "react"
import { Link } from "react-router-dom"

import NavbarSecond from "../components/NavbarSecond"
import Footer from "../components/Footer"

import "../styles/Profile.css"

function Profile() {
  return (
    <div>
      <NavbarSecond />

      <div className="container py-5 mb-5">
        <div className="row justify-content-center pb-5 animate__animated animate__zoomIn">
          <div className="col text-center">
            <img src="./img/user-icon.webp" alt="user-icon" />
            <h3>Garneta Sharina</h3>
          </div>
        </div>
        <div className="row animate__animated animate__fadeInLeft">
          <div className="col">
            <ul className="navbar-nav d-flex flex-md-row gap-md-4 fs-6 text-center">
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/">
                  My Recipe
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Saved Recipe
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Liked Recipe
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row animate__animated animate__fadeIn">
          <div className="col">
            <hr />
          </div>
        </div>
        <div className="row justify-content-center justify-content-md-start gap-1 gap-sm-2 gap-md-4 animate__animated animate__fadeInLeft">
          <Link
            className="mb-1 col-sm-2 col-md-2 d-flex align-items-end img-popular-recipe text-decoration-none text-black"
            style={{ backgroundImage: "url(./img/nasi-goreng-sederhana.webp)" }}
            to="/detail-recipe/nasi-goreng-sederhana"
          >
            <p className="fs-3 fw-medium">Nasi Goreng Sederhana</p>
          </Link>
          <Link
            className="mb-1 col-sm-2 col-md-2 d-flex align-items-end img-popular-recipe text-decoration-none text-black"
            style={{
              backgroundImage: "url(./img/ayam-geprek-sambal-bawang.webp)",
            }}
            to="/detail-recipe/ayam-geprek-sambal-bawang"
          >
            <p className="fs-3 fw-medium">Ayam Geprek Sambal Bawang</p>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Profile
