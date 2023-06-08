import React from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import Swal from "sweetalert2"
import { useDispatch, useSelector } from "react-redux"
import { addAuth } from "../reducers/auth"

import "../styles/Auth.css"

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const state = useSelector((reducer) => reducer.auth)

  React.useEffect(() => {
    if (localStorage.getItem("auth") || state.auth) {
      navigate("/profile")
    }
  }, [state])

  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  const handleLogin = () => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/auth/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        const token = response?.data?.token
        const user_id = response?.data?.data?.id
        const role = response?.data?.data?.role
        Swal.fire({
          title: "Login Success!",
          text: "Login Success! Redirect to App...",
          icon: "success",
        }).then(() => {
          localStorage.setItem("auth", "true")
          localStorage.setItem("token", token)
          localStorage.setItem("role", role)
          localStorage.setItem("user_id", user_id)
          dispatch(addAuth(response))
        })
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error?.response?.data?.message ?? "Something wrong in our App!",
          icon: "error",
        })
      })
  }

  return (
    <div>
      <div className="row flex-column flex-md-row">
        <div className="col p-4 vh-100 left-col d-flex justify-content-center align-items-center">
          <img
            className="image-fluid w-25 animate__animated animate__fadeInUp"
            src="./img/Group-697.webp"
            alt="Mama-Recipe-Logo"
          />
        </div>
        <div className="col p-4 d-flex flex-column justify-content-center m-0 animate__animated animate__fadeInDown">
          <h1 className="text-center">Welcome</h1>
          <p className="text-center text-secondary">
            Log in into your exiting account
          </p>
          <div className="row m-0 p-0 justify-content-start justify-content-md-center">
            <div className="col col-md-8">
              <hr />
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-3">
                  <label for="email" className="form-label">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label for="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="termsConditions"
                    name="termsConditions"
                  />
                  <label className="form-check-label" for="termsConditions">
                    I agree to terms & conditions
                  </label>
                </div>
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn"
                    style={{ backgroundColor: "#efc81a", color: "white" }}
                    onClick={handleLogin}
                  >
                    Log in
                  </button>
                </div>
                <p className="text-end fs-6 fw-medium mt-3">
                  <Link
                    to="/forgot-password"
                    className="text-decoration-none text-black text-body-secondary"
                  >
                    Forgot Password?
                  </Link>
                </p>
              </form>
            </div>
          </div>
          <p className="text-center">
            Don't have an account?
            <Link
              to="/registration"
              className="text-decoration-none"
              style={{ color: "#efc81a" }}
            >
              {" "}
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
