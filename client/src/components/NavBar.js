import React from 'react'
import {useNavigate} from 'react-router-dom'
import './navbar.css'

const NavBar = () => {

    const navigate = useNavigate()
    const handleUsers = () => {
        navigate('/users')
    }
    return (
        <div className='navBar'>
            <ul >
                <li>
                    <a href='/'>Home</a>
                </li>
                <li >
                    <a href='' onClick={handleUsers}>User Stats</a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;