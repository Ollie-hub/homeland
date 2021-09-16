import { useEffect, useState } from 'react'
import { myFetch } from '../../helpers/fetch'
import './employee.scss'


const Employee = () => {
    const [employee, setEmployee] = useState([])

    const url = 'https://api.mediehuset.net/homelands/staff'

    const getEmployees = async () => {
        let res = await myFetch(url)
        setEmployee(res)
    }

    useEffect(() => {
        getEmployees()
    }, [])


    return (
        <article >
            <h2 className="emp-title">Mød vores ansatte</h2>
            <section className="emp-section">

                {employee.items && employee.items.map((item, i) => {

                    return (
                        <div className="emp-content" key={item.id}>
                            <img src={item.image} alt={item.firstname + item.lastname} />
                            <section className="emp-text">
                                <div className="emp-name">{item.firstname + ' ' + item.lastname}</div>
                                <div className="emp-position">{item.position}</div>
                                <div className="emp-email">Email: {item.email}</div>
                                <div className="emp-mobil">Mobil: {item.phone}</div>
                            </section>

                        </div>
                    )


                })
                }
            </section>

        </article>
    )

}

export { Employee };