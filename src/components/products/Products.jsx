import { useHistory } from 'react-router'
import { AuthContext } from '../login/AuthProvider'
import { useContext } from 'react'
import './Products.scss'


const Products = (props) => {
    const item = props.data
    const history = useHistory()
    const { setHouseDetails } = useContext(AuthContext)


    const handleClick = () => {
        history.push(`/Housesforsale/${item.address}`)
        setHouseDetails(item)
    }

    return (
        <div className="news-content" key={item.id} onClick={handleClick}>
            <img className="news-img" src={item.images[0].filename.medium} alt={item.images[0].description} />
            <p className="news-addresse">{item.address}</p>
            <p className="news-zip">{item.zipcode}, {item.city}</p>
            <p className="news-type">{item.type}</p>
            <div className="news-bottom-content">
                <div className="news-energy">{item.energy_label_name}</div>
                <div className="news-info">{item.num_rooms} Værelser, {item.floor_space}m&#178;</div>
                <div className="news-price">{item.price} DKK</div>
            </div>
        </div>
    )
}

export { Products };