import React, { useState } from 'react'
import './style.css';

const Validate = () => {
    const[userName,setUserName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[confirmPassword,setConfirmPassword]=useState("")
 
    const[errorUserName,setErrorUserName]=useState("")
    const[errorEmail,setErrorEmail]=useState("")
    const[errorPassword,setErrorPassword]=useState("")
    const[errorConfirmPassword,setErrorConfirmPassword]=useState("")
 
    const[userColor,setUserColor]=useState("")
    const[emailColor,setEmailColor]=useState("")
    const[passwordColor,setPasswordColor]=useState("")
    const[confirmPasswordColor,setConfirmPasswordColor]=useState("")

    const validate=(e)=>{
        e.preventDefault()

        if(userName.length>8){
            setErrorUserName("")
            setUserColor("green")
        }else{
            setErrorUserName("Username must be 8 letters long")
            setUserColor("red")
        }
        
        if(email.includes('@gmail')){
            setErrorEmail("")
            setEmailColor("green")
        }else{
            setErrorEmail("Email should be of the form @gmail.com")
            setEmailColor("red")
        }
        
        if(password.length>8){
            setErrorPassword("")
            setPasswordColor("green")
        }else{
            setErrorPassword("Password must be 8 letters long")
            setPasswordColor("red")
        }
        if(password!=="" && password===confirmPassword){
            setErrorConfirmPassword("")
            setConfirmPasswordColor("green")
        }else{
            setErrorConfirmPassword("Passwords didnot match")
            setConfirmPasswordColor("red")
        }
    }

    return (
    <>
        <div className='card'>
            <div className='card-image'></div>

            <form>
                <input 
                    type="text"
                    placeholder='Name'
                    style={{borderColor:userColor}}
                    onChange={(e)=>setUserName(e.target.value)}
                />
                <p className='error'>{errorUserName}</p>

                
                <input 
                    type="email"
                    placeholder='Email'
                    style={{borderColor:emailColor}}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <p className='error'>{errorEmail}</p>
                
                <input 
                    type="password"
                    placeholder='Password'
                    style={{borderColor:passwordColor}}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <p className='error'>{errorPassword}</p>
                
                <input 
                    type="password"
                    placeholder='Confirm Password'
                    style={{borderColor:confirmPasswordColor}}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                />
                <p className='error'>{errorConfirmPassword}</p>

                <button className='submit-btn' onClick={(e)=>validate(e)}>Submit</button>
            </form>
        </div>
    </>
  )
}

export default Validate