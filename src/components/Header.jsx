import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import lg from '../img/lg.jpg'
function Header() {

    const [isOpen, setIsOpen] = useState(false)

    const openMenu = () => {
        if (isOpen) {
            document.getElementById('menu').classList.add('hidden')
            document.getElementById('menu').classList.remove('flex')
        } else {
            document.getElementById('menu').classList.add('flex')
            document.getElementById('menu').classList.remove('hidden')
        }
        setIsOpen(!isOpen)
    }

    return (
        <nav className='bg-black p-5 flex-row-reverse gap-5 sm:flex-row sm:justify-between text-white'>



            {/* Movile header config */}

            <div className='container w-full m-auto'>

                <aside className='flex flex-row-reverse justify-between items-center lg:flex-row '>
                    <div>
                        <img className='w-12 h-12 lg:hidden' src={lg} alt="lg fitness logo" />
                    </div>


                    <button onClick={openMenu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                </aside>


                {/* Desktop header config */}

                <aside className='sm:flex lg:gap-16 items-center justify-between md:justify-between'>

                    <div>
                        <img className='w-20 h-20 hidden lg:block' src={lg} alt="lg fitness logo" />
                        <Link to={'/'}></Link>
                    </div>

                    <div className='flex gap-4 items-center'>
                        <ul className='hidden gap-4 flex-col lg:flex lg:flex-row mt-8 lg:mt-0' id='menu'>
                            <li className='hover:underline hover:underline-offset-8 '><Link to={'/'}>Inicio</Link></li>
                            <li className='hover:underline hover:underline-offset-8 '><Link to={'/about'}>Quienes somos</Link></li>
                            <li className='hover:underline hover:underline-offset-8 '><Link to={'/servicios'}>Servicios</Link></li>
                            <li className='hover:underline hover:underline-offset-8 '><Link to={'/contacto'}>Contacto</Link></li>
                        </ul>
                    </div>

                </aside>
            </div>

        </nav>
    )
}

export default Header