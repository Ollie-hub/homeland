import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { myFetch } from "../../helpers/fetch";

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
                    if (i < 3) {
                        return (
                            <div className="news-content" key={item.id}>
                                <img className="news-img" src={item.images[0].filename.medium} alt={item.images[0].description} />
                                <h3 className="news-addresse">{item.address}</h3>
                                <h4 className="news-zip">{item.zipcode}</h4>
                                <h4 className="news-type">{item.type}</h4>
                                <div className="news-bottom-content">
                                    <div className="news-energy">{item.energy_label_name}</div>
                                    <div className="news-info">{item.num_rooms} Værelser, {item.floor_space}m&#178;</div>
                                    <div className="news-price">{item.price}</div>
                                </div>
                            </div>
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