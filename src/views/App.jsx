import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../views/About'
import Home from '../views/Home'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Services from '../views/Services'
import Contact from '../views/Contact'


function App() {
    return (
        <>
            <Header />


            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/servicios' element={<Services />} />
                <Route path='/contacto' element={<Contact />} />

            </Routes>

            <Footer />

        </>
    )
}

export default App