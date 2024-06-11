import React from 'react'

export const FormSubmitted = () => {
    return (
        <div className='grid place-content-center h-96 w-full max-w-screen-lg  mx-auto bg-white bg-opacity-85 p-5 text-center'>

            <h2 className='text-3xl font-bold'>Hemos recibido tu solicitud de contacto</h2>
            <p className='text-xl font-semibold'>Te estaremos contactando en 24 horas</p>
            <p>¡Gracias por confiar en nosotros!</p>
            <a href="/" className='bg-sky-800 w-fit mx-auto px-8 text-white py-2 rounded-md mt-2'>Volver al inicio</a>

        </div>
    )
}
