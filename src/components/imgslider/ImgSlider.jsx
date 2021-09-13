import { useState, useParams, useEffect } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { myFetch } from '../../helpers/fetch'

const ImgSlider = ({ slides }) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const [SliderData, setApiData] = useState([])


    const getProduct = async () => {
        const url = `https://api.mediehuset.net/homelands/images${0}`;
        const data = await myFetch(url);
        setApiData(data)
        console.log(data)
    }

    useEffect(() => {
        getProduct();
    }, [])

    return (
        <section>
            <FaArrowAltCircleLeft className="left-arrow" />
            <FaArrowAltCircleRight className="right-arrow" />

            {SliderData.map((slide, index) => {
                return (
                    <img src={slide.image} alt={slide.alt} />
                )
            })}
        </section>
    );

};

export { ImgSlider };