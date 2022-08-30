import "./header.css"
import logo from "../../assets/TomasinoWeb-Logo-2.png"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const Header = () => {
    const [header, setHeader] = useState(false)
    const [visible, setVisible] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setHeader(true)
        } else {
            setHeader(false)
        }
    }

    const toggleVisible = () => {
        setVisible(!visible)
    }

    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    }, [])

    return (
        <div className={header ? "header colored" : "header"}>
            <div className='brand'>
                <Link to="/"><img src={logo} className='logo' alt='logo' /></Link>
            </div>
            <span className='hamburger-icon' onClick={toggleVisible}>
                {visible ? <AiOutlineClose /> : <AiOutlineMenu /> }
            </span>
            <div className={visible ? 'nav-container' : 'nav-container invisible'}>
                <Link
                    to='/about'
                    className={header ? "colored-nav-link" : "nav-link"}>
                    ABOUT
                </Link>
                <Link
                    to='/r101'
                    className={header ? "colored-nav-link" : "nav-link"}>
                    R101
                </Link>
                <Link
                    to='/faq'
                    className={header ? "colored-nav-link" : "nav-link"}>
                    FAQ
                </Link>
                <a
                    href="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Walter_White_S5B.png/220px-Walter_White_S5B.png"
                    target="_blank"
                    className={header ? "colored-nav-link" : "nav-link"} rel="noreferrer">
                    APPLY
                </a>
            </div>
        </div>
    )
}

export default Header
