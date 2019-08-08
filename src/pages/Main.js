import React, { useEffect } from 'react'

import Api from '../services/Api'

import TinderLogo from '../assets/logo.svg'
import LikeIcon from '../assets/like.svg'
import DislikeIcon from '../assets/dislike.svg'

import './Main.css'

export default function Main({ match }){

    useEffect(() => {
        async function loadUsers(){
            const response = await Api.get('/users', {
                headers: { 
                    user: match.params.id
                }
            })
            console.log(response)
        }
        loadUsers()
    }, [match.params.id])

    return (
        <div className="main-container">
            <img src={TinderLogo} alt="Tinder Logo" />
            <ul>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/42042433?v=4" alt="" />
                    <footer>
                        <strong>Guilherme Mota</strong>
                        <p>A Full-stack web developer</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={DislikeIcon} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={LikeIcon} alt="Dislike"/>
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/42042433?v=4" alt="" />
                    <footer>
                        <strong>Guilherme Mota</strong>
                        <p>A Full-stack web developer</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={DislikeIcon} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={LikeIcon} alt="Dislike"/>
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/42042433?v=4" alt="" />
                    <footer>
                        <strong>Guilherme Mota</strong>
                        <p>A Full-stack web developer</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={DislikeIcon} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={LikeIcon} alt="Dislike"/>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}