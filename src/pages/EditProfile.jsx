import React from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

import NavbarSecond from "../components/NavbarSecond"
import Footer from "../components/Footer"
import Swal from "sweetalert2"

import "../styles/Profile.css"

function EditProfile() {
  const navigate = useNavigate()
  const [profile, setProfile] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [profilePicture, setProfilePicture] = React.useState("")
  const [fullname, setFullname] = React.useState("")
  const [phoneNumber, setPhoneNumber] = React.useState("")

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
            setFullname(response?.data?.data[0].fullname)
            setPhoneNumber(response?.data?.data[0].phoneNumber)
          })
      } else {
        axios
          .get(`${process.env.REACT_APP_BASE_URL}/users`)
          .then((response) => {
            setProfile(response?.data?.data[0])
            setFullname(response?.data?.data[0].fullname)
            setPhoneNumber(response?.data?.data[0].phoneNumber)
          })
      }
    }
  }, [])

  const handleUpdateProfile = () => {
    setIsLoading(true)
    const formData = new FormData()
    formData.append("photo", profilePicture)
    if (profilePicture.length != 0) {
      axios
        .patch(`${process.env.REACT_APP_BASE_URL}/users/photo`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    axios
      .patch(`${process.env.REACT_APP_BASE_URL}/users`, {
        fullname,
        phoneNumber,
      })
      .then((response) => {
        Swal.fire({
          title: "Success Update Profile!",
          text: "Success Update Profile! Go to your profile",
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
              <div className="text-center mb-2">
                <img
                  src={profile?.profilePicture}
                  alt="user-icon"
                  width={"15%"}
                />
              </div>
              <input
                className="form-control mb-3"
                type="file"
                id="formFile"
                onChange={(e) => setProfilePicture(e.target.files[0])}
              />
              <input
                type="text"
                className="form-control mb-3"
                name="fullname"
                id="fullname"
                placeholder="Fullname"
                defaultValue={profile?.fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
              <input
                type="number"
                className="form-control mb-3"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Phone Number"
                defaultValue={profile?.phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn"
                  style={{ backgroundColor: "#efc81a", color: "#fff" }}
                  onClick={handleUpdateProfile}
                >
                  {isLoading ? "Loading..." : "Update"}
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

export default EditProfile
