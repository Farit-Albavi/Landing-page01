import React, { useState } from 'react'
import Carousel from '../components/Carousel'
import Item from '../components/Item'
import { Routes, Route } from 'react-router-dom'
import About from '../views/About'


function Home() {
  const [count, setCount] = useState(0)



  return (

    <>
      <article className='overflow-hidden'>
        <Carousel />
      </article>

      <article>
        <h1 class="acheuno" className="font-bold text-center text-xl m-6">Diseño de páginas web • Diseño Gráfico • Redes Sociales • Marketing Digital</h1>
      </article>

      <article className='p-0 m-0 border-0 lg:flex lg:justify-center'>
        <Item url={'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
        <Item url={'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
        <Item url={'https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&q=80&w=1905&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
        <Item url={'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&q=80&w=2139&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
      </article>

      <article>
        <h1 className='text-center p-12 '>MARCAS QUE CONFIAN EN NOSOTROS</h1>
        <div className='flex gap-1 flex-wrap justify-center'>
          <img src="" alt="" className='w-40 h-40 bg-black' />
          <img src="" alt="" className='w-40 h-40 bg-black' />
          <img src="" alt="" className='w-40 h-40 bg-black' />
          <img src="" alt="" className='w-40 h-40 bg-black' />
          <img src="" alt="" className='w-40 h-40 bg-black' />
          <img src="" alt="" className='w-40 h-40 bg-black' />
        </div>

      </article>


      <Routes>
        <Route path='/about' element={<About />} />
      </Routes>

    </>
  )
}

export default Home
