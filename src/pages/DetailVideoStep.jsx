import React from "react"
import { useLocation } from "react-router"

import NavbarSecond from "../components/NavbarSecond"
import Footer from "../components/Footer"
import ListRecipe from "../menu.json"

function DetailVideoStep() {
  const Recipes = ListRecipe.menu
  const location = useLocation()
  const [currentRecipe, setCurrentRecipe] = React.useState(null)

  React.useEffect(() => {
    const currentSlug = location?.pathname?.split("/")[2]
    window.scroll(0, 0)
    setCurrentRecipe(Recipes.find((res) => res.slug === currentSlug))
  }, [])

  const idVideo = currentRecipe?.videoLink?.split("/")[3]

  return (
    <div>
      <NavbarSecond />

      <div className="container py-5 animate__animated animate__fadeIn vh-100">
        <div className="row flex-column flex-md-row">
          <div className="col text-center">
            <iframe
              width="1000"
              height="500"
              src={`https://www.youtube.com/embed/${idVideo}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <h3>{currentRecipe?.title}</h3>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default DetailVideoStep
