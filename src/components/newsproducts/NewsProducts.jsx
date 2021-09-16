import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { myFetch } from "../../helpers/fetch";
import { ProductList } from "../products/ProductList";
import './newsproducts.scss'
const NewsProducts = () => {

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
        <article className="news-section">
            <section className="news-grid">
                {news.items && news.items.map((item, i) => {
                    if (i < 1) {
                        return (
                            <ProductList data={item} />
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

export { NewsProducts };