import React from 'react'
import '../index.css'

function Item({ url }) {
    return (
        <img src={url} alt="" className='bg-blue-300 w-screen h-96 border-0 p-0 m-0 lg:w-1/4 ' />
    )
}

export default Item