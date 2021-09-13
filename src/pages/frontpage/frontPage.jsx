import { ImgSlider } from "../../components/imgslider/ImgSlider";
import { SliderData } from "../../components/imgslider/SliderData";


const FrontPage = () => {
    return (
        <>
            <main>
                <ImgSlider slides={SliderData} />



            </main>
        </>
    )
}

export { FrontPage };