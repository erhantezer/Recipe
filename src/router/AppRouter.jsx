import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Details from "../pages/details/Details"
import Login from "../pages/login/Login";



const AppRouter = () => {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>

      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/home/details/:mealName" element={<Details/>}/>
    </Routes>
    
    </BrowserRouter>
    
  )
}

export default AppRouter