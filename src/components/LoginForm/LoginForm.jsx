import React, { useState } from 'react';
import './LoginForm.css';
import { FaRegUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";


   


function LoginForm() {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text " placeholder='username' required />
                    <FaRegUser className='icon' />


                </div>
                <div className="input-box">
                    <input type="password" placeholder='password' required />
                    <FaLock className='icon' />

                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />remember me</label>
                    <a href="#">Forgot password</a>
                </div>

                <button type="submit">Login</button>
                <div className="register-link">
                    <p>don't have an account? <a href="./Login/Register">Register</a></p>
                </div>

            </form>
          
      
        </div>
    );
};

export default LoginForm
