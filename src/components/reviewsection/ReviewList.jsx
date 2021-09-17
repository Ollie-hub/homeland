import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../login/AuthProvider'
import { myFetch } from '../../helpers/fetch'
import './reviews.scss'
import { useHistory } from 'react-router'

const ReviewList = (props) => {
    const [apiData, setApiData] = useState()
    const { loginData, open, setOpen } = useContext(AuthContext)
    const history = useHistory()

    const routeChange = () => {
        history.push(`/Login`)

    }

    const toggleClass = () => {
        setOpen(!open)
        console.log(open)
    }
    const id = props.itemId;

    const getData = async () => {
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

        getData();

    }, [])


    return (
        <>
            <h2>Det siger kunderne:</h2>
            <ul>
                {apiData && apiData.items.slice(apiData.items.length - 1, apiData.items.length).map((item, key, i) => {

                    return (
                        <article className="review-section" key={key}>
                            <section >
                                <h3 >{item.title}</h3>
                                <p>{item.content}</p>
                                <p>{item.user.firstname} {item.user.lastname}</p>
                            </section>
                            {loginData ? <button onClick={() => toggleClass()} className="reviewbutton">Skriv Andmeldelse</button> :
                                <button onClick={routeChange}>Log Ind for at skrive andmeldelse</button>}
                        </article>



                    )


                })}
            </ul>
        </>
    )
}

export { ReviewList };