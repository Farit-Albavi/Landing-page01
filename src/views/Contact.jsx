import React from 'react'

const src = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14403.811456746424!2d-57.5665432!3d-25.5066185!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945c559aa4443f67%3A0x52f88c1227f63e4c!2sLG%20Fitness%20Gym!5e0!3m2!1ses-419!2spy!4v1699558411546!5m2!1ses-419!2spy'


function Contact() {
    return (
        <main className='w-screen text-black overflow-hidden'>
            <h1 className='text-3xl font-bold text-center'>Contacto</h1>
            <section className=' max-w-5xl m-auto'>


                <aside className='border m-5 p-5'>
                    <div className='flex gap-5 items-center'>
                        <svg class="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                        </svg>
                        <label>
                            gymlgfitness@gmail.com
                        </label>
                    </div>

                    <div className='flex gap-5 items-center'>
                        <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                            <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                        </svg>
                        <label>
                            0992382082
                        </label>
                    </div>

                    <div className='flex gap-5 items-center'>
                        <svg class="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                            <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                        </svg>
                        <label>
                            Av Mcal. Lopez c/ Av Lomas valentinas, Villeta, Paraguay
                        </label>
                    </div>
                </aside>

                <aside>
                    <iframe src={src}
                        className='w-full h-96 sm:h-[340px] sm:max-w-7xl m-auto sm:block sm:p-0'
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </aside>
            </section>
        </main>
    )
}

export default Contact