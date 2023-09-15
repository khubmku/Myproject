import React, { useState } from "react";

export default function Login() 
{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
       
        <div className="border-4 w-85 border-blue-500 h-80 flex items-center justify-center">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>

                
                <label>email</label> <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" id="email" name="email" /><br/><br/>
               

                <label >password</label> <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" /><br/>
               
                <button type="submit">Log In</button>
            </form><br/>
            <button className="link-btn" onClick={handleSubmit} >Don't have an account? Register here.</button>
        </div>
 
    
    )
}