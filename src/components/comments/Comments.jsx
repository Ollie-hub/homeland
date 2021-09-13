import 'comments.scss'

export function Comments() {

    return (

        <section>
            <div>
                <h3>Comments</h3>
            </div>

            <form>
                <input className="comment-title" type="text" placeholder="Title" />
                <input classname="comment-text" type="text" placeholder="Comment" />
                <button></button>
            </form>
        </section>
    )
}