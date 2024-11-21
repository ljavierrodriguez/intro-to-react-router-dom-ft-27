import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Services from './pages/Services'
import NotFound from './pages/NotFound'
import ServiceDetail from './pages/ServiceDetail'
import Header from './components/Header'
import Profile from './pages/Profile'
import Users from './pages/Users'
import UserDetail from './pages/UserDetail'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/users/:id' element={<UserDetail />} />
                <Route path='/users' element={<Users />} />
                <Route path='/products/category/:id/:name' element={<Contact />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/services/:id' element={<ServiceDetail />} />
                <Route path='/services' element={<Services />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/' element={<Home />} />
                <Route path='*' element={<NotFound />} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default App