import React from 'react';
import './users.css'


const Users = ({allUsers, user}) => {

    const filteredUsers = []
    for(let player of allUsers){
        console.log("user.name", user.name);
        console.log("player.name", player.name);

        if (player.name === user.name){
            filteredUsers.push(player)
        }
    }

    const userElements = filteredUsers.map((user) => {
        return <p>{user.Result}</p>
    })


    return(
        <div className='usersBox'>
            {user ?
                <h2><u>{user.name}</u></h2>:
                <h2><u>Player</u></h2>}
            {userElements}
        </div>

    )
}

export default Users;