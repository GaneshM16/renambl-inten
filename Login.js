import { useState,useEffect } from "react";
import Index from "./Index.css"
import { useNavigate} from "react-router-dom";
import { logindata } from "./data";
function Login(){

        const[username,setusername]=useState("")
        const[password,setpassword]=useState("")
        const[showpassword,setshowpassword]=useState(false)
        const navigate=useNavigate()
         function check(){
                const logininfo = logindata.find(
                        (data) => data.login === username && data.password === password
                      );
                  
                      if (logininfo) {
                        // alert("Login successful!");
                        setusername("")
                        setpassword("")
                        navigate("/movies")
                      } 
                      else {
                        alert("Invalid username or password!");

                      }
         }


    return(

    
    <div id="index">
        <div id="first">
        <p>Welcome to Movies login pages</p><br></br>
                <table>
                        <tr>
        <label id="l1">username </label></tr><tr>
        <input id="input1" type="text" placeholder="username" value={username} onChange={(e)=>setusername(e.target.value)}></input></tr>
        <tr>
        <label id="l2">password </label></tr><tr>
        <input id="input2" type={showpassword? "text" : "password"} placeholder="password" value={password} onChange={(e)=>setpassword(e.target.value)}></input></tr>
        <tr><td>
        <input onChange={()=>setshowpassword(!showpassword)} type="checkbox" />show password</td><td><a href="">Forgot password?</a></td> </tr>
        <div>
        <button class="login1" onClick={check}>login</button>
        <button class="login2">Sign up</button></div>
        </table>
        </div>
</div>
        )
}
export default Login