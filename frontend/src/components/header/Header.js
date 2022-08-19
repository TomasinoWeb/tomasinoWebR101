import "./header.css"
import logo from "../../assets/TomasinoWeb-Logo-2.png"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const Header = () => {
    const [header, setHeader] = useState(false)
    const [visible, setVisible] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 66) {
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
        <div className={header ? "header" : "header transparent"}>
            <div className='brand'>
                <Link to="/"><img src={logo} className='logo' alt='logo' /></Link>
            </div>
            <span className='hamburger-icon' onClick={toggleVisible}>
                {visible ? <AiOutlineClose /> : <AiOutlineMenu /> }
            </span>
            <div className={visible ? 'nav-container' : 'nav-container invisible'}>
                <Link
                    to='/about'
                    className={header ? "nav-link" : "transparent-nav-link"}>
                    ABOUT
                </Link>
                <Link
                    to='/r101'
                    className={header ? "nav-link" : "transparent-nav-link"}>
                    R101
                </Link>
                <Link
                    to='/faq'
                    className={header ? "nav-link" : "transparent-nav-link"}>
                    FAQ
                </Link>
                <Link
                    to='/application'
                    className={header ? "nav-link" : "transparent-nav-link"}>
                    APPLY
                </Link>
            </div>
        </div>
    )
}

export default Header
