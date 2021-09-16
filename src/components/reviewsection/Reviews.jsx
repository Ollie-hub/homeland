import { ReviewForm } from './ReviewForm';
import { ReviewList } from './ReviewList';
import { useParams } from 'react-router';


const Reviews = () => {
    const { id } = useParams();

    return (
        <section>
            <div>
                <ReviewList itemId={id} />
            </div>
            <div>
                <ReviewForm />
            </div>
        </section>
    )
}

export { Reviews }