import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/login/AuthProvider";
import { myFetch, myFetchDelete } from "../../helpers/fetch";
import './reviewsection.scss';


const ReviewSection = (props) => {
    const { loginData } = useContext(AuthContext)
    const [apiData, setApiData] = useState()
    const [user, setUser] = useState()
    const id = props.itemId;

    const getReviews = async () => {
        const url = `https://api.mediehuset.net/homelands/reviews`
        const options = {
            method: 'GET',
            headers: {
                'Authorization': `Baerer ${loginData.access_token}`
            }
        }
        try {
            const result = await myFetch(url, options);
            setApiData(result);
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (loginData) {
            getReviews();
        }
    }, [loginData, id])

    //Checker loginData og filterer review listen ud i fra hvilken user der er logget ind (Sådan man ikke kan slette andre folks reviews)
    useEffect(() => {
        let userFilter = apiData && apiData.items.filter(item => item.user_id == loginData.user_id)
        setUser(userFilter)
    }, [apiData])

    //fetch til at slette reviews 
    const deleteReview = async (reviewId) => {
        const url = `https://api.mediehuset.net/homelands/reviews/${reviewId}`
        try {
            const result = await myFetchDelete(url, null, loginData.access_token)
            getReviews();
        }
        catch (error) {
            console.error(error);
        }
    }


    return (
        <section className="Delete-reviews">
            <div>
                <h3>Dine Reviews</h3>
            </div>
            {user && user.map((item, key, i) => {
                return (
                    <section className="my-reviews" key={key}>
                        <p className="reviews-title">{item.title}</p>
                        <button className="reviews-button" type="button" onClick={(() => deleteReview(item.id))}>Slet kommentar</button>
                    </section>
                )
            })}
        </section>
    )
}

export { ReviewSection }