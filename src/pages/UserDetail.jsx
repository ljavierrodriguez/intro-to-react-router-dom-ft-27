import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const UserDetail = () => {
    const [user, setUser] = useState(null)

    const params = useParams()

    useEffect(() => {
        getUserById(params.id)
    }, [])

    const getUserById = (id) => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then((response) => response.json())
            .then((data) => setUser(data))
            .catch((error) => console.log(error.message))
    }
    return (
        <>
            <div>User Detail {user?.id}</div>
            <div>Name: {user?.name}</div>
        </>
    )
}

export default UserDetail