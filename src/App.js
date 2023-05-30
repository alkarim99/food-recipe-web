import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "./pages/Home"
import AddRecipe from "./pages/AddRecipe"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import ForgotPassword from "./pages/ForgotPassword"
import CodeResetPassword from "./pages/CodeResetPassword"
import ResetPassword from "./pages/ResetPassword"
import Registration from "./pages/Registration"
import DetailRecipe from "./pages/DetailRecipe"
import DetailVideoStep from "./pages/DetailVideoStep"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add-recipe",
    element: <AddRecipe />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/code-reset-password",
    element: <CodeResetPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/detail-recipe/:slug",
    element: <DetailRecipe />,
  },
  {
    path: "/detail-video-step/:id",
    element: <DetailVideoStep />,
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
