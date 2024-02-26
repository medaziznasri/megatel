import React, { useState } from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import './Register.css';



 




function Register() {
   
       
    return (
      <div className='wrapper'>
            <form action="">
                <h1>Register</h1>
                <div className="input-box">
                    <input type="text " placeholder='Full Name' required />
                    <FaUserEdit className='icon' />


                </div>
              
                
                <div className="input-box">
                    <input type="email" placeholder='Write A Valid Email'  required />
                    <MdOutlineMail className='icon' />

                </div>
                <div className="input-box">
                    <label for="Birth"></label>
                    <input id='Birth' type="date" required />
                   

                </div>
              
            
                
                                 
                <button type="submit">Register</button>
      

             

            </form>
          
      
        </div>
  )
}

export default Register
