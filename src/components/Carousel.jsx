import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

function Carousel() {

    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }, {
            url: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }, {
            url: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&q=80&w=1905&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }, {
            url: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className='w-screen xl:w-[1440px] xl:h-[820px] h-[400px] m-auto relative'>
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full xl:rounded-2xl bg-center bg-cover duration-500'>


                {/* Left arrow */}
                <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 xl:left-10 rounded-full p-2 bg-black/20 xl:hover:bg-black/50 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30}  ></BsChevronCompactLeft>
                </div >
                {/* Right arrow */}

                <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 xl:right-10 rounded-full p-2 bg-black/20 xl:hover:bg-black/50 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} ></BsChevronCompactRight>
                </div >


                <div className='flex justify-center py-2 absolute top-[95%] translate-y-[-50%] right-[50%] translate-x-[50%]'>
                    {slides.map((slide, slideIndex) => (
                        <div key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className='text-2xl cursor-pointer '>
                            <RxDotFilled color='black'/>
                        </div>
                    ))}
                </div>
            </div>



        </div>
    )
}

export default Carousel