import React, { useState, useEffect } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
import slide1 from '../img/slide1.jpg'
import slide2 from '../img/slide2.jpg'
import slide3 from '../img/slide3.jpg'
import slide4 from '../img/slide4.jpg'


function Carousel() {

    const slides = [
        {
            url: slide1,
            key: 'slide-1',
        },
        {
            url: slide2,
            key: 'slide-2',
        },
        {
            url: slide3,
            key: 'slide-3',
        },
        {
            url: slide4,
            key: 'slide-4',
        },
    ];


    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }


    setInterval(() => {
        if (currentIndex < slides.length) {
            nextSlide();
        }
    }, 5000);

    return (
        <div className='w-screen xl:w-screen xl:h-[540px] h-[400px] m-auto relative'>
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full xl:rounded-2xls bg-center bg-cover  '>


                {/* Left arrow */}
                {/* <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 xl:left-10 rounded-full p-2 bg-black/20 xl:hover:bg-black/50 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30}  ></BsChevronCompactLeft>
                </div > */}
                {/* Right arrow */}

                {/* <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 xl:right-10 rounded-full p-2 bg-black/20 xl:hover:bg-black/50 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} ></BsChevronCompactRight>
                </div > */}

            </div>



        </div>
    )
}

export default Carousel