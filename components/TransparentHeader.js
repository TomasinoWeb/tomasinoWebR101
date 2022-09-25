import headerStyles from "../styles/TransparentHeader.module.css"
import Link from "next/link"
import { useState, useEffect } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { FaDiscord } from "react-icons/fa"

function Header() {
    const [visible, setVisible] = useState(false)
    const [colored, setColored] = useState(false)

    const changeBackground = () => { 
        if (window.scrollY) { 
            setColored(false)
        } else { 
            setColored(true)
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
        <div className={colored ? headerStyles.header : `${headerStyles.header} ${headerStyles.colored}`}>
            <div className={headerStyles.brand}>
                <Link href='/'>
                    <a>
                        <img
                            src='/static/TomasinoWeb-Logo-2.png'
                            className={`${headerStyles.logo} ${headerStyles["desktop-logo"]}`}
                            alt='logo'
                        />
                    </a>
                </Link>
                <Link href='/'>
                    <a>
                        <img
                            src='/static/TomasinoWeb Logo 2.png'
                            className={`${headerStyles.logo} ${headerStyles["mobile-logo"]}`}
                            alt='logo2'
                        />
                    </a>
                </Link>
            </div>
            <span
                className={headerStyles["hamburger-icon"]}
                onClick={toggleVisible}>
                {visible ? <AiOutlineClose /> : <AiOutlineMenu />}
            </span>

            <div
                className={
                    visible
                        ? headerStyles["nav-container"]
                        : `${headerStyles["nav-container"]} ${headerStyles["invisible"]}`
                }>
                <Link href='/about'>
                    <a className={headerStyles["nav-link"]}>ABOUT</a>
                </Link>
                <Link href='/r101'>
                    <a className={headerStyles["nav-link"]}>R101</a>
                </Link>
                <Link href='/faq'>
                    <a className={headerStyles["nav-link"]}>FAQ</a>
                </Link>
                <a
                    href='https://forms.gle/WyzZ99XBtZjVLPdH7'
                    target='_blank'
                    rel='noreferrer'
                    className={headerStyles["nav-link"]}>
                    APPLY
                </a>
                <a href='https://discord.com' target='_blank' rel='noreferrer' className={headerStyles["nav-link"]} id={headerStyles.discord}>
                    <FaDiscord />
                </a>
            </div>
        </div>
    )
}
export default Header
