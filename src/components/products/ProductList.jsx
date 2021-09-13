import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { myFetch } from '../../helpers/fetch';

const ProductList = () => {
    const [apiData, setApiData] = useState([])

    const fetchProducts = async () => {
        const url = 'https://api.mediehuset.net/stringsonline/products/group/3';
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
                {apiData.group ? (
                    <div>
                        <h1>{apiData.group.title}</h1>
                        <p>{apiData.group.title}</p>
                    </div>
                ) : (
                    <p>No Products found</p>
                )}
            </section>

            <section>
                <ul>
                    {apiData.products && apiData.products.map((product, key) => {
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