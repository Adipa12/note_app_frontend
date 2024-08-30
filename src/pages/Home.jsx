import { useNavigate } from "react-router-dom";

function Home(){
    const Navigate = useNavigate();
    const handleRegister = () => {
        Navigate("/register")
    }
    return(
        <div>
            <h1>Welcome to Home Page</h1>
            <h2>You can procceed with Registration Process Now...</h2>
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}
export default Home;