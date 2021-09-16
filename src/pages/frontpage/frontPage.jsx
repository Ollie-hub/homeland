import { ImgSlider } from "../../components/imgslider/ImgSlider";
import { NewsProducts } from "../../components/newsproducts/NewsProducts";
import { Reviews } from "../../components/reviewsection/Reviews";



const FrontPage = () => {
    return (
        <>

            <main>
                <ImgSlider />
                <NewsProducts />
                <Reviews />

            </main>
        </>
    )
}

export { FrontPage };