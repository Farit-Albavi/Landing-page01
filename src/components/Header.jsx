import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
        <nav className='bg-[#ede7db] p-5 flex-row-reverse gap-5 sm:flex-row sm:justify-between lg:p-10'>

            <div className='container'>

                <aside className='flex flex-row-reverse justify-between items-center lg:flex-row '>

                    <h1 className='font-bold text-2xl lg:text-4xl text-center lg:hidden'>LANDING PAGE</h1>
                    <button onClick={openMenu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                </aside>


                <aside className='sm:flex lg:gap-16 items-center justify-between'>

                    <h1 className='font-bold text-2xl lg:text-4xl text-center hidden lg:block'>LANDING PAGE</h1>

                    <div className='flex gap-4 items-center'>
                        <ul className='hidden gap-4 flex-col lg:flex lg:flex-row mt-8 lg:mt-0' id='menu'>
                            <li className='hover:underline hover:underline-offset-8 '><Link to={'/'}>Home</Link></li>
                            <li className='hover:underline hover:underline-offset-8 '><Link to={'/about'}>Quienes somos</Link></li>
                            <li className='hover:underline hover:underline-offset-8 '><Link to={'/about'}>Servicios</Link></li>
                            <li className='hover:underline hover:underline-offset-8 '><Link to={'/about'}>Contacto</Link></li>
                        </ul>

                        <aside className='lg:flex gap-2 justify-center hidden'>
                            <div className='w-8 h-8 rounded-full bg-black'></div>
                            <div className='w-8 h-8 rounded-full bg-black'></div>
                            <div className='w-8 h-8 rounded-full bg-black'></div>
                        </aside>
                    </div>

                </aside>
            </div>

        </nav>
    )
}

export default Header