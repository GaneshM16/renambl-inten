import { Routes,Route } from 'react-router-dom'
import Box from './Box'
import Login from './Login'
import Movies from './Movies'
import HHome from './Hhome'
import Movies1 from './Movies1'
// import './hhome.css'
function Home(){
    return(
        <div  >
            <Box/>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/movies' element={<Movies/>}/>
                <Route path='/' element={<HHome/>}/>
                <Route path='/movies1' element={<Movies1/>}/>

            </Routes>
        </div>
    )
}
export default Home