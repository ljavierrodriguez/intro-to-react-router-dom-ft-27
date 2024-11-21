import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

    const user = null
    //const navigate = useNavigate()

    /* useEffect(() => {
        if (user === null) navigate('/')
    }, []) */

    if (user === null) return (
        <div>No esta autorizado a ver este contenido</div>
    )



    return (
        <div>Profile</div>
    )
}

export default Profile