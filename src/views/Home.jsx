import React, { useState } from 'react'
import Carousel from '../components/Carousel'
import { Routes, Route } from 'react-router-dom'
import About from '../views/About'
import Card from '../components/Card'
import person from '../img/person.jpg'

const src = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14403.811456746424!2d-57.5665432!3d-25.5066185!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945c559aa4443f67%3A0x52f88c1227f63e4c!2sLG%20Fitness%20Gym!5e0!3m2!1ses-419!2spy!4v1699558411546!5m2!1ses-419!2spy'

function Home() {
  const [count, setCount] = useState(0)

  return (

    <>
      <article className='overflow-hidden'>
        <Carousel />
      </article>

      <article>
      </article>

      <section className='max-w-7xl m-auto'>
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

      <article className='lg:p-12'>
        <h1 className='text-center'>UBICACION</h1>
        <iframe src={src}
          className='w-full h-96 sm:h-[340px] sm:max-w-7xl m-auto sm:block sm:p-0'
          allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>

      </article>


      <Routes>
        <Route path='/about' element={<About />} />
      </Routes>

    </>
  )
}

export default Home
