import React, {useEffect, useState} from 'react';
import {getRecords} from './UserService';


const Users = () => {

    const [users, setUsers] = useState ([])

    useEffect (() => {
        getRecords()
        .then((results) => {
            setUsers(users)
            console.log(users)
        })

    }, [])

    const usersNode = users.map(() => {
        return <Users users={users} />
    })

    return(
      <>
        {usersNode}
      </>
    )
}

export default Users;