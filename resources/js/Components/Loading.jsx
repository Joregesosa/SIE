import { ProgressSpinner } from 'primereact/progressspinner'
import React from 'react'

export const Loading = ({ message, status }) => {
    return (
        <>
            {status &&
                <div className='bg-gray-400 w-full h-full absolute left-0 top-0 bg-opacity-10 grid place-content-center'>
                    <ProgressSpinner aria-label='loading' />
                    <span className='text-2xl text-blue-800 font-bold'>{message}...</span>
                </div>
            }
        </>

    )
}
