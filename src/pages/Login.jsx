import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");

    const handleLogin = async ()=> {
        const payload = {
            email,
            password
        }
        try{
            const response = await fetch("https://devnotesapp.onrender.com/user/login", 
            {    method:"POST",
                  headers:{
                    "content-Type":"application/json"
                  },
                  body: JSON.stringify(payload)
            }
            );
            const data = await response.json();
            console.log(data);
            if(data.token){
                localStorage.setItem("token", data.token);
                alert(`${data.message}`);
                navigate("/notes")
            }
            else{
                alert(`${data.message}`);
            }
        }
        catch(error){
            alert(`An error occured ${error}`);
        }
    }

    return (
    <div>
          <h1>Welcome to Login Page</h1>
          <input type="email" placeholder="Enter Email id" value={email} onChange={(e)=> setEmail(e.target.value)} />
          <input type="password" placeholder="Enter Password" value={password} onChange={(e)=> setPassword(e.target.value)} />
          <button onClick={handleLogin}>Login</button>
      </div>
      );
  }
  export default Login;