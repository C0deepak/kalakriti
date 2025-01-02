import React from 'react'

const CategoryCard = ({ img, alt, title, text }) => {
    return (
        <div className="w-full flex flex-col items-center gap-4">
            <img
                className="w-full h-[280px] md:h-[360px] lg:h-[440px] object-cover rounded-t-full"
                src={img}
                alt={alt}
            />
            <div className="flex flex-col items-center">
                <h4 className="font-taviraj font-medium text-lg text-center">{title}</h4>
                <p className='text-center'>{text}</p>
            </div>
        </div>
    )
}

export default CategoryCard