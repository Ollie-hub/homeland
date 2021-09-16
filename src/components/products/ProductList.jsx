import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { myFetch } from "../../helpers/fetch";
import { Products } from "./Products";
import './Products.scss'

const ProductList = () => {

    const [news, setNews] = useState([])

    const url = 'https://api.mediehuset.net/homelands/homes'

    const getNews = async () => {
        let res = await myFetch(url)
        setNews(res)
    }

    useEffect(() => {
        getNews()
    }, [])


    return (
        <article className="product-section">
            <section className="news-grid">
                {news.items && news.items.map((item, i) => {
                    if (i < 3) {
                        return (
                            <Products data={item} key={item.id} />
                        )
                    }
                    else {
                        return null
                    }
                })
                }
            </section>

        </article>
    )
}

export { ProductList };