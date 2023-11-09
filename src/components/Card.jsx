import React from 'react'

function Card({ img, name }) {
    return (

        <div class="max-w-sm bg-white  rounded-lg shadow dark:bg-gray-800 ">
            <img class="" src={img} alt="" />
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </div>
    )
}

export default Card