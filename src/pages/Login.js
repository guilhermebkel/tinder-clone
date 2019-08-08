import React from 'react'

import './Login.css'

import TinderLogo from './../assets/logo.svg'

export default function Login(){
    return (
        <div className="login-container">
        <form>
            <img src={TinderLogo} alt="Tinder Logo" />
            <input placeholder="Type your github username..." />
            <button type="submit">Log in</button>
        </form> 
        </div>
    )
}