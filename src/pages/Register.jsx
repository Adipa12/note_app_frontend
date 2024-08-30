import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register(){
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload ={
            name,
            email,
            password,
            gender,
            age
        }
        try{
            await fetch("https://devnotesapp.onrender.com/user/register",
                {
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                });
            alert("user registered successfully"); 
            navigate("/login");  
            console.log("successfully registered")
        }
        catch(error){
            console.log("Error", error);
            alert(`An error occured ${error}`);
        }
    }
    return (
    <div>
          <h1>Welcome to Register Page</h1>
          <input type="text" placeholder="Enter the Name" value={name} onChange={(e)=> setName(e.target.value)} />
          <input type="email" placeholder="Enter the Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
          <input type="password" placeholder="Enter the password" value={password} onChange={(e)=> setPassword(e.target.value)} />
          <input type="text" placeholder="Enter the gender" value={gender} onChange={(e)=> setGender(e.target.value)} />
          <input type="number" placeholder="Enter the age" value={age} onChange={(e)=> setAge(e.target.value)} />
          <button onClick={handleSubmit}>Submit</button>
      </div>
      );
  }
  export default Register;