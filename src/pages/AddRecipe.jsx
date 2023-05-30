import React from "react"

import NavbarSecond from "../components/NavbarSecond"
import Footer from "../components/Footer"

function AddRecipe() {
  return (
    <div>
      <NavbarSecond />

      <div className="container py-5 mb-5 animate__animated animate__zoomIn">
        <form action="/" method="get">
          <div className="row py-3 justify-content-md-center">
            <div className="col-md-7 d-grid">
              <input className="form-control mb-3" type="file" id="formFile" />
              <input
                type="text"
                className="form-control mb-3"
                name="title"
                id="title"
                placeholder="Title"
              />
              <textarea
                className="form-control mb-3"
                name="ingredients"
                id="ingredients"
                cols="35"
                rows="5"
              >
                Ingredients :
              </textarea>
              <input
                type="text"
                className="form-control mb-3"
                name="video"
                id="video"
                placeholder="Video"
              />
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn"
                  style={{ backgroundColor: "#efc81a", color: "#fff" }}
                >
                  Send
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
