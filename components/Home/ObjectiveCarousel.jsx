'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import '@/components/styles/ObjectiveCarousel.css'
import objectives from '@/data/objectives'
import Autoplay from 'embla-carousel-autoplay'
import handmade from '@/public/img/handmade.png'
import Image from 'next/image'

const ObjectiveCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {objectives.map((obj, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__number">
                                <div className='flex flex-col items-center justify-center gap-4 py-16 md:py-8 px-4 md:px-16 font-raleway'>
                                    <Image src={handmade} alt='Kalariti handmade Logo' className='w-24 pb-4' />
                                    <h3 className='font-taviraj font-medium text-2xl md:text-3xl text-center'>{obj.heading}</h3>
                                    <p className='text-center'>{obj.para}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
        </section>
    )
}

export default ObjectiveCarousel
