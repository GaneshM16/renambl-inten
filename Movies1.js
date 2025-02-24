import { useLocation } from "react-router-dom";
import './Movies1.css'
import  { detail } from './data'
import { useEffect, useState } from "react";
function Movies1() {
  const location = useLocation();
  const movie = location.state;
  const [text,settext]=useState("")
  const[textd,settextd]=useState("")
  useEffect(
    ()=>{
        settext(movie.cast)
    }
  )

  useEffect(() => {
    const castdetail = detail.find(data => data.cast === text);
    if (castdetail) {
      settextd(castdetail.detail1 );
    } else {
      settextd("No details found.");
    }
  }, );
  return (
    <div id="m1">
      {movie ? (
        <div id="m2">
          <h2>{movie.title}  movies </h2>
          <p>{movie.cast} Details</p>
          {  <img id="img1" src={movie.image} alt="Movie Scene" /> }<p>
            {textd}
          </p>
        </div>
      ) : (
        <p>No movie selected</p>
      )}
    </div>
  );
}

export default Movies1;
