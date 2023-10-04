import React, {useEffect, useState} from 'react';
import {getUsers} from './UserService';


const Users = () => {

    const [users, setUsers] = useState ([])

    useEffect (() => {
        getUsers()
        .then((results) => {
            setUsers(users)
            console.log(users)
        })

    }, [])

    const usersNode = users.map(() => {
        return <Users users={users} key={(users._id)}/>

    })

    return(
      <>
        {usersNode}
      </>
    )
}

export default Users;