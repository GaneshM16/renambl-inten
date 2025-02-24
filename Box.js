import './Movies.css'
import { Link,useLocation } from 'react-router-dom'
function Navbar(){
    const location = useLocation()
    const moviespage=location.pathname ==="/movies"
    const movies1page=location.pathname ==="/movies1"
    return(
<div id="nav">
    <ul>
        <Link to="/"><li>Home</li></Link>
        {/* <Link to="/movies"><li>Movies</li></Link> */}
        <Link to="/about"><li>About</li></Link>
        <Link to="/movies"><li>{movies1page ? "Movie" : null}</li></Link>
        <Link id='lo' to="/login"><button>{(moviespage || movies1page)? "logout" : "Login"}</button></Link>
        
    </ul>
</div>

    )
}
export default Navbar