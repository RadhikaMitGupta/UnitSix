import React, { useEffect,useState } from "react";
 import "./Navbar.css"
const genres = ["Comedy", "Thriller", "Drama", "Documentary", "Children"];

export const MoviesDashboard = () => {
  const [data,setData]=useState("")
  const [filter,setFilter]=useState("")
 
  useEffect(() => {
    //   dispatch an action to the store 
    getData()
    
  },[]);
  // }, [dispatch]);
const getData=()=>{
  fetch("https://movie-fake-server.herokuapp.com/data")
  .then((d)=>d.json())
  .then((res)=> {
    console.log("res:",res)
    setData(res)
  
  })
}
 
//    filter by genre 
const handleFilter = (e)=>{
    // dispach filterby genre action to the store

}
  return (
    <>
      <div id="movie">
      <h2>Movies</h2>
      <select  onChange={handleFilter}>Select MovieGenres
        {/* map through the filter  */}
        {genres.map((e)=>(
           <option value={e}>{e}</option>
        ))}
       
      </select>

      <div className = "movies-list">
       {/* map throught th movie list and display the results */}
       {data.length > 0 && (
        <ul>
          
          {data.map(data => (
            <div>
       <table>
         <tr>
        <th> Movie Name</th>
        <th>Genre</th>
        <th> Rating</th>
        <th> Release Date</th>
        </tr>
       <tr>
       <td key={data.id}>{data.movie_name}</td>
       <td key={data.id}>{data.genre}</td>
       <td key={data.id}>{data.rating}</td>
       <td key={data.id}>{data.release_date}</td>
       </tr>
     </table>

            </div>
          ))}
        </ul>
      )}
      </div>
      </div>
    </>
  );
};
