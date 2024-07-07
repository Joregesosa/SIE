import React from 'react'

export const FormHeader = ({ title, desc, variant }) => {
    const bg = variant === 'contact' ? 'bg-[#112757]' : 'bg-[#9e1525]'
    return (
        <header id='scroll' className={`${bg} text-gray-100 max-w-screen-lg px-8 mx-auto rounded-t-md bg-opacity-80 md:flex md:items-center md:flex-wrap py-6`}>

            <figure className='w-44 h-44 mx-auto md:mx-0 flex-shrink-0'>
                <img loading='lazy' src="/images/logo.png" alt="company logo" className='w-full' />
            </figure>
            <div className='flex-grow text-center'>
                <h1 className='text-center md:text-4xl py-2 text-2xl font-semibold'>
                    THOMAS RUSSELL CRAMPTON
                </h1>
                <h2 className='text-2xl'>{title}</h2>
            </div>

            {desc && <p className=' w-full py-1 text-justify'>
                {desc}
            </p>}

        </header>
    )
}
