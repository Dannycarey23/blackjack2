import React from 'react';
import User from './User';


const Users = ({allUsers}) => {

    const userElements = allUsers.map((user) => {
        return <User user={user} key={user._id}/>
    })


    return(
        <>
        <h2> All Users </h2>
        {userElements}
        </>

    )
}

export default Users;