import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const Services = () => {
    const [services] = useState([
        { id: 1, name: 'Service 1' },
        { id: 2, name: 'Service 2' },
        { id: 3, name: 'Service 3' },
    ])

    const [searchParams, setSearchParams] = useSearchParams()

    const page = searchParams.get('page')
    const search = searchParams.get('search')
    console.log(page)
    console.log(search)
    return (
        <>
            <button className='btn btn-info btn-sm' onClick={() => setSearchParams({ page: 2, search: search})}>
                Actualizar Valores
            </button>
            <div>Services</div>
            {/* <ul>
                <li><Link to={"/services/" + 1}>Servicio 1</Link></li>
                <li><Link to={"/services/" + 2}>Servicio 2</Link></li>
                <li><Link to={"/services/" + 3}>Servicio 3</Link></li>
            </ul> */}
            <ul>
                {
                    services.map((service) => {
                        return (
                            <li key={service.id}>
                                <Link to={"/services/" + service.id}>
                                    {service.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Services