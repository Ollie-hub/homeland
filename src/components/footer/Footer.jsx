import './footer.scss'
import Twitter from '../../img/twitter.svg'
import Facebook from '../../img/facebook.svg'

const Footer = () => {

    return (
        <footer>
            <section className="footer-section">
                <div className="footer-logo">
                    <h1>HomeLands</h1>
                </div>
                <div className="footer-address">
                    <p>Øster Uttrupvej 5</p>
                    <p>9000 Aalborg</p>
                </div>
                <div className="footer-contact">
                    <p>Email: info@homelands.dk</p>
                    <p>Telefon: +45 1122 3344</p>
                </div>
                <div className="footer-socials">
                    <img className="twitter" src={Twitter} alt="Twitter Logo" />
                    <img className="facebook" src={Facebook} alt="Facebook Logo" />
                </div>
            </section>
        </footer>

    )
}

export { Footer };