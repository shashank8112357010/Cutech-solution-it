import React from 'react'

export const NoPageFound = () => {
    return (
        <div className='w-full items-center flex justify-center py-20'>
            <div className='sm:w-[700px] sm:h-[300px]'>
                <img src='/img/PageNotFound.png' alt='pageNotFound' className='w-full h-full object-cover' />
            </div>
        </div>
    )
}

