import React, { useState } from 'react'
import "./loginpage.css"
import SignInScreen from './SignInScreen';

function LoginPage() {

    const [SignIn,setSignIn]=useState(false);
    return (
        <div className="loginscreen">
            <div className="login_background">
                <img className="logo"  src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="" />
            <button className="button" >Sign IN</button>

            <div className="gradient">

            </div>
                <div className="body">
                    {SignIn ? (<SignInScreen />) :
                    ( <>
                        <h1> Unlimited films , TV programmes and more.</h1>
                        <h2> Watch Anywhere Cancel Anytime.</h2>
                        <h3> Ready to watch? Enter your e-mail to create or restart account.</h3>
    
                        <div className="input">
                            <form >
                                <input type="email" placeholder="Email Address" />
                                <button className="submitbutton"
                                onClick={() => setSignIn(true)}
                                >
                                    GET STARTED
                                </button>
                            </form>
                        </div>
                        </>)} 
                   
                </div>
            </div>
        
        </div>
    )
}

export default LoginPage
