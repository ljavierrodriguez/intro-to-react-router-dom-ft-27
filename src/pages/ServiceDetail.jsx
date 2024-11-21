import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ServiceDetail = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    return (
        <>
        <div>Service Detail {id}</div>
        <button className='btn btn-primary btn-sm' onClick={() => navigate('/')}>Home</button>
        <button className='btn btn-warning btn-sm' onClick={() => navigate(-1)}>Regresar</button>
        </>
    )
}

export default ServiceDetail