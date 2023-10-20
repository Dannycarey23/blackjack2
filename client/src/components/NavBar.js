import React from 'react'
import {useNavigate} from 'react-router-dom'
import './navbar.css'

const NavBar = () => {

    const navigate = useNavigate()
    const handleUsers = () => {
        navigate('/users')
    }
    return (
        <>
            <ul className='navBarUL'>
                <li>

                    <a href='/'>Home</a>
                </li>
                <li className='userStatLink'>
                    <p onClick={handleUsers}>User Stats</p>
                </li>
            </ul>
        </>
    )
}

export default NavBar;