import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './pages/Login'
import Main from './pages/Main'

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path="/Fake-Tinder/" exact component={Login} />
            <Route path="/Fake-Tinder/user/:id" component={Main} />
        </BrowserRouter>
    )
}