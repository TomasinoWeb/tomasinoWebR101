import "./Footer.css"
import { Link } from "react-router-dom"
import {
    SiFacebook,
    SiTwitter,
    SiInstagram,
    SiYoutube,
    SiMedium,
} from "react-icons/si"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-left-col'>
                <p className="footer-link">&copy;2022 TomasinoWeb</p>
                <Link to='/departments' className='footer-link'>
                    Departments
                </Link>
                <a
                    href='https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Walter_White_S5B.png/220px-Walter_White_S5B.png'
                    target='_blank'
                    rel="noreferrer"
                    className='footer-link'>
                    Application Form
                </a>
                <Link to='/faq' className='footer-link'>
                    Frequently Asked Questions
                </Link>
            </div>
            <div className='footer-right-col'>
                <a href='https://www.facebook.com/TomasinoWeb'>
                    <span className='footer-icons'>
                        <SiFacebook />
                    </span>
                </a>
                <a href='https://www.twitter.com/TomasinoWeb'>
                    <span className='footer-icons'>
                        <SiTwitter />
                    </span>
                </a>
                <a href='https://instagram.com/tomasinoweb'>
                    <span className='footer-icons'>
                        <SiInstagram />
                    </span>
                </a>
                <a href='https://www.youtube.com/TomasinoWeb'>
                    <span className='footer-icons'>
                        <SiYoutube />
                    </span>
                </a>
                <a href='https://tomasinoweb.medium.com/'>
                    <span className='footer-icons'>
                        <SiMedium />
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Footer
