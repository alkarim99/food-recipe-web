import React from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

import NavbarSecond from "../components/NavbarSecond"
import Footer from "../components/Footer"
import RecipeCard from "../components/RecipeCard"

import "../styles/Profile.css"

function Profile() {
  const navigate = useNavigate()
  const [profile, setProfile] = React.useState([])
  const [listRecipes, setListRecipes] = React.useState([])

  React.useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/login")
    } else {
      const user_id = localStorage.getItem("user_id")
      const role = localStorage.getItem("role")
      if (role == 1) {
        axios
          .get(`${process.env.REACT_APP_BASE_URL}/users/${user_id}`)
          .then((response) => {
            setProfile(response?.data?.data[0])
          })
      } else {
        axios
          .get(`${process.env.REACT_APP_BASE_URL}/users`)
          .then((response) => {
            setProfile(response?.data?.data[0])
          })
      }

      axios
        .get(`${process.env.REACT_APP_BASE_URL}/recipes?user_id=${user_id}`)
        .then((response) => {
          setListRecipes(response?.data?.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [])

  return (
    <div>
      <NavbarSecond />

      <div className="container py-5 mb-5">
        <div className="row justify-content-center pb-5 animate__animated animate__zoomIn">
          <div className="col text-center">
            <img src={profile?.profilePicture} alt="user-icon" width={"15%"} />
            <h3>{profile?.fullname}</h3>
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
              {/* <li className="nav-item">
                <Link className="nav-link" to="/">
                  Saved Recipe
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Liked Recipe
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="row animate__animated animate__fadeIn">
          <div className="col">
            <hr />
          </div>
        </div>
        <div className="row justify-content-center justify-content-md-start gap-1 gap-sm-2 gap-md-4 animate__animated animate__fadeInLeft">
          {listRecipes?.length !== 0 ? (
            listRecipes?.length !== 0 ? (
              listRecipes?.map((item, index) => {
                return (
                  <RecipeCard
                    title={item?.title}
                    image={item?.recipePicture}
                    id={item?.recipes_id}
                    key={index}
                  />
                )
              })
            ) : (
              <p className="text-center">You don't have a recipe list yet</p>
            )
          ) : (
            <p className="text-center">Loading...</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Profile
