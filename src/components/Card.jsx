import React from 'react'

function Card({ img, name, descript }) {
    return (

        <div class="max-w-sm bg-white  rounded-lg shadow dark:bg-gray-800 ">
            <img class="" src={img} alt="" />
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </a>
                <div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {descript}
                    </p>
                    <ul className="mb-3 font-normal text-gray-700 dark:text-gray-400 list-disc list-inside">
                        <li>Entrenador personal</li>
                        <li>Profesor</li>
                        <li>Culturista</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Card