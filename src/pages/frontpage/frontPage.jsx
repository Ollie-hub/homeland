import { Employee } from "../../components/employee/Employee";
import { ImgSlider } from "../../components/imgslider/ImgSlider";
import { NewsProducts } from "../../components/newsproducts/NewsProducts";
import { Reviews } from "../../components/reviewsection/Reviews";
import './frontpage.scss'


const FrontPage = () => {
    return (
        <>

            <main>
                <ImgSlider />
                <NewsProducts />
                <Reviews />
                <Employee />
            </main>
        </>
    )
}

export { FrontPage };