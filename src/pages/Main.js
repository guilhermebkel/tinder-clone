import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Api from '../services/Api'

import TinderLogo from '../assets/logo.svg'
import LikeIcon from '../assets/like.svg'
import DislikeIcon from '../assets/dislike.svg'

import './Main.css'

export default function Main({ match }){

    const [users, setUsers] = useState([])

    useEffect(() => {
        async function loadUsers(){
            const response = await Api.get('/users', {
                headers: { 
                    user: match.params.id
                }
            })
            
            setUsers(response.data.users)
        }
        loadUsers()
    }, [match.params.id])

    async function handleLike(id){
        const response = await Api.post(`/users/${id}/likes`, null, {
            headers: {
                user: match.params.id
            }
        })

        if(response.data.user.match) alert("Match!")
    }

    async function handleDislike(id){
        await Api.post(`/users/${id}/dislikes`, null, {
            headers: {
                user: match.params.id
            }
        })

        setUsers(users.filter(user => user._id !== id))
    }

    return (
        <div className="main-container">
            <Link to="/Fake-Tinder/">
                <img src={TinderLogo} alt="Tinder Logo" />
            </Link>
                { users.length ? (
                    <ul>
                        {users.map(user => (
                            <li key={user._id}>
                                <img src={user.avatar} alt="" />
                                <footer>
                                    <strong>{user.name}</strong>
                                    <p>{user.bio}</p>
                                </footer>
                                <div className="buttons">
                                    <button type="button" onClick={() => handleDislike(user._id)}>
                                        <img src={DislikeIcon} alt="Dislike"/>
                                    </button>
                                    <button type="button" onClick={() => handleLike(user._id)}>
                                        <img src={LikeIcon} alt="Dislike"/>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="empty">Acabou :(</div>
                )}
        </div>
    )
}