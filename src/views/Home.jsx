import React, { useState } from 'react'
import Carousel from '../components/Carousel'
import { Routes, Route } from 'react-router-dom'
import About from '../views/About'
import Card from '../components/Card'
import person from '../img/person.jpg'
import Carousel2 from '../components/Carousel2'


function Home() {
  const [count, setCount] = useState(0)

  return (

    <>
      <article className='overflow-hidden'>
        <Carousel2></Carousel2>
      </article>

      <article>
      </article>

      <section className='max-w-7xl m-auto py-16'>
        <h1 class="acheuno" className="font-bold text-center text-xl m-6">Instructores</h1>

        <article className='flex xl:gap-10 flex-wrap justify-center gap-5 px-5'>
          <Card img={person}
            name={'Arnaldo A.'} descript={'Entrena con Arnaldo A. desde las 12:00hs'} />
          <Card img={person}
            name={'Violeta Samaniego'} descript={'Entrena con Violeta apartir de las 6:00hs'} />
          <Card img={person}
            name={'Sol Cardozo'} descript={'Entrena con Sol apartir de las 21:00hs'} />

        </article>

      </section>




      <Routes>
        <Route path='/about' element={<About />} />
      </Routes>

    </>
  )
}

export default Home
