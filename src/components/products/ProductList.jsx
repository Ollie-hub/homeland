import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { myFetch } from '../../helpers/fetch';

const ProductList = () => {
    const [Data, setApiData] = useState([])

    const fetchProducts = async () => {
        const url = 'https://api.mediehuset.net/homelands/homes';
        const data = await myFetch(url);
        setApiData(data)
        console.log(data);
    }
    useEffect(() => {
        fetchProducts()
    }, [])


    return (
        <>
            <section>
                {Data.group ? (
                    <div>
                        <h1>{Data.group.title}</h1>
                        <p>{Data.group.title}</p>
                    </div>
                ) : (
                    <p>No Products found</p>
                )}
            </section>

            <section>
                <ul>
                    {Data.products && Data.products.map((product, key) => {
                        return (
                            <li key={key}>
                                <Link to={`/products/${product.id}`}>
                                    {product.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </>
    )
}

export { ProductList };