import React from 'react'

const UniqueCard = ({ icon, title, para }) => {
    return (
        <div className='flex flex-col sm:flex-row items-center gap-4 md:gap-8 font-raleway'>
            {icon}
            <div className='flex flex-col'>
                <h3 className='text-center sm:text-left font-taviraj font-medium text-lg md:text-xl'>{title}</h3>
                <p className='text-center sm:text-left'>{para}</p>
            </div>
        </div>
    )
}

export default UniqueCard