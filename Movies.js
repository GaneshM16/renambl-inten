import { useState,useEffect } from "react";
import './Movies.css'
import  {moviesname,detail,image} from './data.js'
import { useNavigate} from "react-router-dom";


function MOvie(){
  const navigate=useNavigate()
    const[actor,setactor]=useState(localStorage.getItem("actor") || "all")
    const[movies,setmovies]=useState(localStorage.getItem("movies") || "")
    const[name,setname]=useState([] || "")
    const[show,setshow]=useState([] || "")
    const[actorname,setactorname]=useState([]|| "")
    useEffect(
        ()=>{
                setname(  actor=="all" ?(moviesname.map(data=>data.movies)) 
                :  moviesname.filter(data=>data.actor === actor).map(data=>data.movies))
        },[actor]
    )
    useEffect(
        ()=>{
            setshow(image[movies] || [])
        },[movies]
    )
    useEffect(
        ()=>{
            setactorname(detail.filter(data=>data.movies == movies).map(data=>data.cast))
        },[movies]
    )
    useEffect(
        ()=>{
            localStorage.setItem("movies",movies)
            localStorage.setItem("actor",actor)
        }
    )
    function movies1(index){
      const selectedMovie = {
        title: movies,
        cast: actorname[index] || "Not available",
        image: show[index] || null
      };
      navigate('/movies1', { state: selectedMovie });
      // navigate('/movies1')
    }





    return(<div id="over"><div id="main">
        <select id="name" value={actor} onChange={(e)=>setactor(e.target.value)} >

<option value={"all"}>selcet the actor</option>
<option value={"Vijay"}>Vijay</option>
<option value={"Suriya"}>Suriya</option>
<option value={"Ajith"}>Ajith</option></select>

<select id="movies" value={movies} onChange={(e)=>setmovies(e.target.value)} ><option value={""}>select the movies</option>
        { name.map((data)=>(<option key={data} value={data}>{data}</option>))}</select><div id="pa">
<p id="para">{movies} cast and crew</p></div>
      
    </div>
    {/* <div id="show"><div ></div>
    <div id="m1" ><p>{movies} Cast</p><p>{actorname[0] }</p>{show[0] ? <img id="i1" src={show[0]}  alt={show[0]}/>:null }<br></br> <br></br><button>Details</button></div>
    <div id="m2"><p>{movies} Cast</p><p>{actorname[1] }</p>{show[1] ? <img id="i2" src={show[1]}  alt= {show[1]}/>:null }<br></br><br></br><button>Details</button></div>
    <div id="m3"><p>{movies} Cast</p><p>{actorname[2] }</p>{show[2] ? <img id="i3" src={show[2]}  alt={show[2]}/>:null }<br></br><br></br><button>Details</button></div>
    <div id="m4"><p>{movies} Cast</p><p>{actorname[3] }</p>{show[3] ? <img id="i4" src={show[3]}  alt={show[3]}/>:null }<br></br><br></br><button>Details</button></div>
    <div id="m5" ><p>{movies} Cast</p><p>{actorname[4] }</p>{show[4] ? <img id="i5" src={show[4]}  alt={show[4]}/>:null }<br></br><br></br><button>Details</button></div>
    <div id="m6"><p>{movies} Cast</p><p>{actorname[5] }</p>{show[5] ? <img id="i6" src={show[5]}  alt={show[5]}/>:null }<br></br><br></br><button>Details</button></div>
    </div> */}

      <div id="show">
  {actorname.length > 0 ? (
    actorname.map((actor, index) => (
      <div key={index} class="m">
        <p>{movies} Cast</p>
        <p>{actor}</p>
        {show[index] ? <img class="i" src={show[index]} alt="Movie Scene" /> : null}
        <br />
        <br />
        <button  onClick={()=>movies1(index)} class="button">Details</button>
      </div>
    ))
  ) : (
    <p>No cast available</p>
  )}
</div>


  </div>
    )
}
export default MOvie