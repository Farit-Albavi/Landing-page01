import React from 'react'
import lg from '../img/lg.jpg'

function Footer() {
    return (
        <footer class="shadow bg-black p-4">
            <div class="w-full container mx-auto md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="#" class="flex items-center mb-4 sm:mb-0">
                        <img className='lg:w-20 lg:h-20 w-14 h-14 lg:block' src={lg} alt="lg fitness logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">FITNESS GYM</span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline">LG FITNESS GYM</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer