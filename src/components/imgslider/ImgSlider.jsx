import React, { useEffect, useState } from 'react'
import './imgslider.scss'
import { BtnSlider } from './BtnSlider'
import { myFetch } from '../../helpers/fetch'

const ImgSlider = () => {

    const [sliderData, setSliderData] = useState([])
    //fetching the images for the slider

    const url = 'https://api.mediehuset.net/homelands/images'
    const getSliderData = async () => {
        let res = await myFetch(url)
        setSliderData(res)
    }
    useEffect(() => {
        getSliderData()
    }, [])


    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== sliderData.items.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === sliderData.items.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(sliderData.items.length)
        }
    }
    return (
        <article className="container-slider">
            {sliderData.items && sliderData.items.map((data, i) => {
                return (
                    <div
                        key={i}
                        className={slideIndex === i + 1 ? "slide active-anim" : "slide"}
                    >
                        <img
                            src={data.image[1]}
                            alt="bannerimg"
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />
        </article>
    )
}


export { ImgSlider };