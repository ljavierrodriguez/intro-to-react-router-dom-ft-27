import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {

    const [users, setUsers] = useState(null)

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.log(error.message))
    }


    return (
        <>
        <div>Users</div>
        <ul className="list-group mx-5 my-3">
            {
                !!users &&
                users.map((user) => {
                    return (
                        <li className='list-group-item d-flex justify-content-between' key={user.id}>
                            <span>{user.name}</span>
                            <Link to={"/users/"+user.id}><i className="bi bi-eye-fill"></i></Link>
                        </li>
                    )
                })
            }
        </ul>
        </>
    )
}

export default Users