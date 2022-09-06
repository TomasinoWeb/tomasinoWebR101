import footerStyles from "../styles/Footer.module.css"
import Link from "next/link"
import {
    SiFacebook,
    SiTwitter,
    SiInstagram,
    SiYoutube,
    SiMedium,
} from "react-icons/si"

const Footer = () => {
    return (
        <div className={footerStyles["footer"]}>
            <div className={footerStyles["footer-left-col"]}>
                <p className={footerStyles["fw-500"]}>&copy;2022 TomasinoWeb</p>
                <Link href='/departments'>
                    <a className={footerStyles["footer-link"]}>Departments</a>
                </Link>
                <a
                    href='https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Walter_White_S5B.png/220px-Walter_White_S5B.png'
                    target='_blank'
                    rel='noreferrer'
                    className={footerStyles["footer-link"]}>
                    Application Form
                </a>
                <Link href='/faq'>
                    <a className={footerStyles["footer-link"]}>Departments</a>
                </Link>
            </div>
            <div className={footerStyles["footer-right-col"]}>
                <a href='https://www.facebook.com/TomasinoWeb'>
                    <span className={footerStyles["footer-icons"]}>
                        <SiFacebook />
                    </span>
                </a>
                <a href='https://www.twitter.com/TomasinoWeb'>
                    <span className={footerStyles["footer-icons"]}>
                        <SiTwitter />
                    </span>
                </a>
                <a href='https://instagram.com/tomasinoweb'>
                    <span className={footerStyles["footer-icons"]}>
                        <SiInstagram />
                    </span>
                </a>
                <a href='https://www.youtube.com/TomasinoWeb'>
                    <span className={footerStyles["footer-icons"]}>
                        <SiYoutube />
                    </span>
                </a>
                <a href='https://tomasinoweb.medium.com/'>
                    <span className={footerStyles["footer-icons"]}>
                        <SiMedium />
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Footer
