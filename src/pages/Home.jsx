import { Link } from "react-router-dom"

import "../styles/Home.css"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import RecipeCard from "../components/RecipeCard"

import ListRecipe from "../menu.json"

function Home() {
  return (
    <div>
      <Navbar />

      <div className="right-layer animate__animated animate__fadeIn"></div>

      <div className="container mt-4" style={{ height: "100vh" }}>
        <div className="row flex-column-reverse gap-5 flex-lg-row py-5">
          <div className="col-8 col-lg-4 align-self-center animate__animated animate__fadeInLeft">
            <h1
              className="text-center text-lg-start fw-bolder fs-1 mb-4"
              style={{ color: "#2e266f" }}
            >
              Discover Recipe & Delicious Food
            </h1>
            <form action="#" method="post">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Search Restaurant, Food"
              />
            </form>
          </div>
          <div className="col text-center text-lg-end animate__animated animate__fadeInRight">
            <img
              src="./img/Rectangle-313.webp"
              alt="food"
              style={{ width: "55%" }}
            />
          </div>
        </div>
      </div>

      <div
        className="container d-flex align-items-center my-5 animate__animated animate__flipInX"
        style={{ height: "80px" }}
      >
        <div
          className="vr"
          style={{ width: "15px", backgroundColor: "#efc81a", opacity: "100%" }}
        ></div>
        <p className="m-0 ms-3 fs-1 fw-semibold" style={{ color: "#3f3a3a" }}>
          Popular For You!
        </p>
      </div>

      <div className="container vh-100">
        <div className="row flex-column gap-5 flex-lg-row py-5">
          <div className="col text-center text-lg-start animate__animated animate__fadeInLeft">
            <img
              src="./img/nasi-goreng-sederhana.webp"
              alt="food"
              style={{ width: "80%" }}
            />
          </div>
          <div className="col-8 col-lg-4 d-flex flex-column d-lg-block justify-content-center align-self-center animate__animated animate__fadeInRight">
            <h2
              className="text-center text-lg-start fs-1"
              style={{ color: "#3f3a3a" }}
            >
              Nasi Goreng Sederhana
            </h2>
            <hr className="opacity-100" />
            <p
              style={{ color: "#3f3a3a" }}
              className="text-center text-lg-start"
            >
              Resep Nasi Goreng Sederhana, Praktis Lezat Hanya dengan Lima Bahan
            </p>
            <Link
              to="/detail-recipe/nasi-goreng-sederhana"
              className="btn btn-lg"
              style={{ backgroundColor: "#efc81a", color: "#fff" }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div
        className="container d-flex align-items-center my-5 animate__animated animate__flipInX"
        style={{ height: "80px" }}
      >
        <div
          className="vr"
          style={{ width: "15px", backgroundColor: "#efc81a", opacity: "100%" }}
        ></div>
        <p className="m-0 ms-3 fs-1 fw-semibold" style={{ color: "#3f3a3a" }}>
          New Recipe
        </p>
      </div>

      <div className="left-layer animate__animated animate__fadeIn"></div>

      <div className="container vh-100">
        <div className="row flex-column gap-5 flex-lg-row py-5">
          <div className="col text-center text-lg-start animate__animated animate__fadeInLeft">
            <img
              src="./img/ayam-geprek-sambal-bawang.webp"
              alt="food"
              style={{ width: "80%" }}
            />
          </div>
          <div className="col-8 col-lg-4 d-flex flex-column d-lg-block justify-content-center align-self-center animate__animated animate__fadeInRight">
            <h2
              className="text-center text-lg-start fs-1"
              style={{ color: "#3f3a3a" }}
            >
              Ayam Geprek Sambal Bawang
            </h2>
            <hr className="opacity-100" />
            <p
              style={{ color: "#3f3a3a" }}
              className="text-center text-lg-start"
            >
              Resep Ayam Geprek Sambal Bawang, Pedas Nikmat dan Bikin Nagih
            </p>
            <Link
              to="/detail-recipe/ayam-geprek-sambal-bawang"
              className="btn btn-lg"
              style={{ backgroundColor: "#efc81a", color: "#fff" }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div
        className="container d-flex align-items-center my-5 animate__animated animate__flipInX"
        style={{ height: "80px" }}
      >
        <div
          className="vr"
          style={{ width: "15px", backgroundColor: "#efc81a", opacity: "100%" }}
        ></div>
        <p className="m-0 ms-3 fs-1 fw-semibold" style={{ color: "#3f3a3a" }}>
          Popular Recipe
        </p>
      </div>

      <div className="container px-4 px-md-4 py-5 mb-5 container-popular-recipe">
        <div className="row justify-content-between gap-1 gap-sm-2 gap-md-4">
          {ListRecipe.menu.map((item) => {
            return (
              <RecipeCard
                title={item?.title}
                image={item?.image}
                slug={item?.slug}
              />
            )
          })}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home
