import React, { useState } from 'react'
import Api from '../services/Api'

import './Login.css'

import TinderLogo from './../assets/logo.svg'

export default function Login({ history }){

    const [ username, setUsername ] = useState('')

    async function handleSubmit(event){
        event.preventDefault()

        const response = await Api.post('/users', {
            user: username,
        })

        console.log(response)
        //history.push('/Fake-Tinder/main')
    }

    return (
        <div className="login-container">
        <form onSubmit={handleSubmit}>
            <img src={TinderLogo} alt="Tinder Logo" />
            <input 
                placeholder="Type your github username..." 
                value={username}
                onChange={event => setUsername(event.target.value)}
            />
            <button type="submit">Log in</button>
        </form> 
        </div>
    )
}