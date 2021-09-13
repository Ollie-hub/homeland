import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { myFetch } from '../../helpers/fetch';

const ProductDetails = () => {
    const [apiData, setApiData] = useState([])
    let { productId } = useParams();

    const getProduct = async () => {
        const url = `https://api.mediehuset.net/stringsonline/products/${productId}`;
        const data = await myFetch(url);
        setApiData(data)
        console.log(data)
    }

    useEffect(() => {
        getProduct();
    }, [productId])


    return (
        <>
            <h1>Products</h1>
            <section>
                {apiData.item ? (
                    <div>
                        <h2>{apiData.item.name}</h2>
                        {apiData.item.image.fullpath ? (
                            <img src={apiData.item.image.fullpath} alt="product img." />
                        ) : ('')}
                        <p>{apiData.item.description_long}</p>
                        {apiData.item.gallery.map((image, key) => {
                            return (
                                <p key={key}>
                                    <img src={image.fullpath} alt="product desc." />
                                </p>
                            )
                        })}
                    </div>
                ) : (
                    <p>No product found</p>
                )}
            </section>
        </>
    )
}

export { ProductDetails };