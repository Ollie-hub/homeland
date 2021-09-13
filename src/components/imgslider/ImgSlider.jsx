import React, { useState } from 'react'
import './imgslider.scss'
import { BtnSlider } from './BtnSlider'
import { SliderData } from './SliderData'

const ImgSlider = () => {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== SliderData.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === SliderData.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(SliderData.length)
        }
    }

    return (
        <div className="container-slider">
            {SliderData.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img
                            src={obj.image}
                            alt="bannerimg"
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />
        </div>
    )
}

export { ImgSlider };