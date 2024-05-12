import React from 'react'
import PropTypes from 'prop-types'
export const MainFormFieldset = ({ children, legend, description }) => {
    return (
        <fieldset className='grid grid-cols-1 md:grid-cols-2 gap-4  max-w-screen-lg mx-auto bg-white bg-opacity-75 p-5 h-full w-full'>

            <legend className='text-2xl font-semibold col-span-2 pt-8'>
                {legend}
                <span className='font-normal text-base'><br />
                    {description}
                </span>
            </legend>

            {children}

        </fieldset>
    )
}
MainFormFieldset.prototype = {
    legend: PropTypes.string,
    description: PropTypes.string
}