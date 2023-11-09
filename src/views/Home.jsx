import React, { useState } from 'react'
import Carousel from '../components/Carousel'
import { Routes, Route } from 'react-router-dom'
import About from '../views/About'
import Card from '../components/Card'



function Home() {
  const [count, setCount] = useState(0)



  return (

    <>
      <article className='overflow-hidden'>
        <Carousel />
      </article>

      <article>
      </article>

      <section>
        <h1 class="acheuno" className="font-bold text-center text-xl m-6">Instructores</h1>

        <article className='flex xl:gap-10 flex-wrap justify-center gap-5 px-5'>
          <Card img={'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&q=80&w=2139&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
            name={'Fred'} />
          <Card img={'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&q=80&w=2139&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
            name={'Fred'} />
          <Card img={'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&q=80&w=2139&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
            name={'Fred'} />

        </article>

      </section>



      <article>
        <h1 className='text-center p-12 '>UBICACION</h1>


      </article>


      <Routes>
        <Route path='/about' element={<About />} />
      </Routes>

    </>
  )
}

export default Home
