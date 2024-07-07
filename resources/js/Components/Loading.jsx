import { ProgressSpinner } from 'primereact/progressspinner'
import React from 'react'

export const Loading = ({ message, status }) => {
    return (
        <>
            {status &&
                <div className='bg-gray-600 w-full h-full fixed left-0 top-0 bg-opacity-40 grid place-content-center'>
                    <ProgressSpinner aria-label='loading' />
                    <span className='text-2xl text-blue-800 font-bold'>{message}...</span>
                </div>
            }
        </>

    )
}
