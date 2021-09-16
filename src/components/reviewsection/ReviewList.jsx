import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../login/AuthProvider'
import { myFetch } from '../../helpers/fetch'

const ReviewList = (props) => {
    const [apiData, setApiData] = useState()
    const { loginData } = useContext(AuthContext)
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
        if (loginData) {
            getData();
        }
    }, [loginData, id])


    return (
        <>
            <h2>Det siger kunderne:</h2>
            <ul>
                {apiData && apiData.items.slice(apiData.items.length - 1, apiData.items.length).map((item, key, i) => {

                    return (
                        <section key={key}>
                            <li >{item.title}</li>
                        </section>


                    )


                })}
            </ul>
        </>
    )
}

export { ReviewList };