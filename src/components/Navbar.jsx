import React from "react";
import {Link} from "react-router-dom"
import "./Navbar.css"
// const links = [
//   {
//     title: "Home",
//     link: "/",
//     id: "header-link-home",
//   },
//   //   add the other link as well
// ];
export const Navbar = () => {
  return (
    //map through the link ad display it in header
    <div id='navbar'>
    <li> <Link to="/About">About</Link> </li>
    <li> <Link to="/">Home</Link> </li>
    <li> <Link to="/MoviesDashboard">Movies</Link> </li>
    <li> <Link to="/SingleMovieDetails"> SingleMovie</Link> </li>
    
    </div>

  )
};
