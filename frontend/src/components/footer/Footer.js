import './footer.css'
import {Link} from 'react-router-dom'
import {SiFacebook, SiTwitter, SiInstagram, SiYoutube, SiMedium} from 'react-icons/si'

const Footer = () => { 
    return(
        <div className="footer">
            <div className="footer-left-col">
                <p>&copy;2022 TomasinoWeb</p>
                <Link to="/departments" className='footer-link'>Departments</Link>
                <Link to="/application" className='footer-link'>Application Form</Link>
                <Link to="/faq" className='footer-link'>Frequently Asked Questions</Link>
            </div>
            <div className="footer-right-col">
                <span className="footer-icons" href=""><SiFacebook /></span>
                <span className="footer-icons" href=""><SiTwitter /></span>
                <span className="footer-icons" href=""><SiInstagram /></span>
                <span className="footer-icons" href=""><SiYoutube /></span>
                <span className="footer-icons" href=""><SiMedium /></span>
            </div>
        </div>
    )
}

export default Footer