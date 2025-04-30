import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import About from "../pages/About"
import Gym from "../pages/Gym"
import Contact from "../pages/Contact"
import Login from "../pages/authantication/Login"
import Signup from "../pages/authantication/Signup"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/gym" element={<Gym/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default Router
