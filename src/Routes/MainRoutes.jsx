import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Navbar } from "../components/Navbar"
// import { Navbar } from "../components/Navbar"
import About from "../components/About";
import Home from "../components/Home";
import {MoviesDashboard} from "../components/MoviesDashboard"
import {SingleMovieDetails} from "../components/SingleMovieDetails"
export const MainRoutes = ()=>{
    return(
        <>
        <Router>
    <Navbar />
   <Routes>
     <Route path="/"  element={<Home />} ></Route>
     <Route path="/About" element={<About /> } ></Route> 
     <Route path="/MoviesDashboard" element={<MoviesDashboard />}></Route>
     <Route path="/SingleMovieDetails" element={<SingleMovieDetails />}></Route> 
   </Routes>
   </Router>
        </>
    )
}