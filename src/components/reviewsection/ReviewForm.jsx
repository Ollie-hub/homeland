
import { useContext } from 'react'
import { myFetch } from '../../helpers/fetch'
import { useForm } from "react-hook-form";
import { AuthContext } from '../login/AuthProvider'
import { useHistory } from 'react-router';
import './reviews.scss'

const ReviewForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { loginData, open } = useContext(AuthContext)
    const history = useHistory()

    const onSubmit = async (data, e) => {
        e.preventDefault()
        let formData = new FormData();
        const token = loginData.access_token
        formData.append('title', data.title)
        formData.append('content', data.content)
        formData.append('user_id', data.user_id)
        formData.append('active', true)
        formData.append('num_stars', 4)
        console.log(formData)
        const url = `https://api.mediehuset.net/homelands/reviews`
        const options = {
            method: 'POST',
            headers: {
                'Authorization': `Baerer ${loginData.access_token}`
            },
            body: formData
        }
        try {
            const result = await myFetch(url, options);
            console.log(result)
            resetInputs();
            resetSite();
        }
        catch (error) {
            console.error(error);
        }
    }
    //reseter inputs efter submit
    const resetInputs = () => {
        const inputs = [...document.querySelectorAll(".required")]
        inputs.forEach(element => element.value = "")
    }
    const resetSite = () => {
        history.go(0)
    }


    return (
        <>
            <form className={open ? 'review-form show' : 'review-form'} onSubmit={handleSubmit(onSubmit)}>
                <section className="review-form-section">
                    <div>
                        <label htmlFor="title">Titel:</label>
                        <input className="required" type="text" name="title" placeholder="Skriv din titel"{...register('title', { required: true })} />
                        {errors.title && <span className="error">Du skal indtaste en titel</span>}
                    </div>
                    <div>
                        <label htmlFor="content">Anmeldelse:</label>
                        <textarea className="required" name="content" id="" rows="5" wrap="hard" placeholder="Skriv din anmeldelse"{...register('content', { required: true })}></textarea>
                        {errors.comment && <span className="error">Du skal skrive en anmeldelse</span>}
                    </div>
                </section>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export { ReviewForm };