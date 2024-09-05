import React from "react";
import './SigninSignup.css';

function Home(){
    const logout=()=>{
        localStorage.removeItem("signUp")
        window.location.reload()
    }

    const deleteAccount=()=>{
        localStorage.clear()
        window.location.reload()
        
    }
    

    return (
        <div className="home">
            <h1>Welcome {localStorage.getItem('Name')} </h1>
            <button  onClick={logout} className="logout">LogOut</button>
            <button onClick={deleteAccount} className="Delete">Delete Account</button>
        </div>
    );
}
export default Home ;