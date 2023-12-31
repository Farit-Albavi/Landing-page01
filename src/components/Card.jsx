import React from 'react'

function Card({ img, name, descript }) {
    return (

        <div class="max-w-[330px] max-h-[600px]  rounded-xl shadow bg-gray-950 ">
            <img class="rounded-t-lg border" src={img} alt="Personal Trainer Photo" />
            <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
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