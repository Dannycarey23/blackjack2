import React from 'react'
import {useNavigate} from 'react-router-dom'
import './navbar.css'

const NavBar = () => {

    const navigate = useNavigate()

    const handleHome = () => {
        navigate('/')
    }
    
    const handleUsers = () => {
        navigate('/users')
    }
    return (
        <div className='navBar'>
            <ul >
                <li onClick={handleHome}>
                    Home
                </li>
                <li onClick={handleUsers}>
                    User Stats
                </li>
            </ul>
        </div>
    )
}

export default NavBar;