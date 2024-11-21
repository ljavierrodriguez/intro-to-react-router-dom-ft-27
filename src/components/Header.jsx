import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {

    const location = useLocation()


    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className={"nav-link " + (location.pathname === '/' ? 'active': '' )} to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className={"nav-link " + (location.pathname === '/contact' ? 'active': '' )} to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
                <Link className={"nav-link " + (location.pathname === '/services' ? 'active': '' )} to="/services">Services</Link>
            </li>
            <li className="nav-item">
                <Link className={"nav-link " + (location.pathname === '/profile' ? 'active': '' )} to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://google.com" target='_blank'>Google</a>
            </li>
        </ul>
    )
}

export default Header