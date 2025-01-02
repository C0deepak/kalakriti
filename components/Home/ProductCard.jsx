import React from 'react'

const ProductCard = ({img, alt, title, price}) => {
    return (
        <div className="w-full flex flex-col items-center gap-4 p-2 md:p-4 border border-orange-950/60">
            <img
                className="w-full h-[180px] md:h-[260px] lg:h-[320px] object-cover"
                src={img}
                alt={alt}
            />
            <div className="flex flex-col items-center">
                <h4 className="font-taviraj font-medium text-lg text-center">{title}</h4>
                <p className='text-center font-medium'>{price}</p>
            </div>
        </div>
    )
}

export default ProductCard