import FormData from "form-data"
import React from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Swal from "sweetalert2"

import NavbarSecond from "../components/NavbarSecond"
import Footer from "../components/Footer"

function AddRecipe() {
  const navigate = useNavigate()

  const [recipePicture, setRecipePicture] = React.useState([])
  const [title, setTitle] = React.useState("")
  const [ingredients, setIngredients] = React.useState("")
  const [videoLink, setVideoLink] = React.useState("")
  const [userId, setUserId] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/login")
    } else {
      setUserId(localStorage.getItem("user_id"))
    }
  })

  const handleCreateRecipe = () => {
    setIsLoading(true)
    const formData = new FormData()
    formData.append("recipePicture", recipePicture)
    formData.append("title", title)
    formData.append("ingredients", ingredients)
    formData.append("videoLink", videoLink)
    formData.append("user_id", userId)
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/recipes`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        Swal.fire({
          title: "Success Create Recipe!",
          text: "Success Create Recipe! Go to your profile",
          icon: "success",
        }).then(() => {
          navigate("/profile")
        })
      })
      .catch((error) => {
        console.log(error)
        Swal.fire({
          title: "Error!",
          text: error?.response?.data?.message ?? "Something wrong in our App!",
          icon: "error",
        })
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <div>
      <NavbarSecond />

      <div className="container py-5 mb-5 animate__animated animate__zoomIn">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="row py-3 justify-content-md-center">
            <div className="col-md-7 d-grid">
              <input
                className="form-control mb-3"
                type="file"
                id="formFile"
                onChange={(e) => setRecipePicture(e.target.files[0])}
              />
              <input
                type="text"
                className="form-control mb-3"
                name="title"
                id="title"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                className="form-control mb-1"
                name="ingredients"
                id="ingredients"
                cols="35"
                rows="5"
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="Ingredients"
              ></textarea>
              <small className="mb-3">
                * Write the ingredients with a comma separator (salt, paper,
                etc...)
              </small>
              <input
                type="text"
                className="form-control mb-1"
                name="video"
                id="video"
                placeholder="Video"
                onChange={(e) => setVideoLink(e.target.value)}
              />
              <small className="mb-3">* Please use youtube link</small>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn"
                  style={{ backgroundColor: "#efc81a", color: "#fff" }}
                  onClick={handleCreateRecipe}
                >
                  {isLoading ? "Loading..." : "Send"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  )
}

export default AddRecipe
