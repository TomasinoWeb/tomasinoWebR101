import styles from "../styles/About.module.css"
import Head from "next/head"
import Link from "next/link"
import Header from "../components/Header"

const About = () => {
    return (
        <>
            <Header />
            <div className={styles["container"]}>
                <div className={styles["hero-container"]}>
                    <div id={styles["logo-container"]}>
                        <img src='/static/logo.png' alt='TomasinoWeb logo' />
                    </div>
                    <div id={styles["statement-container"]}>
                        <h1 className={styles["main-heading"]}>
                            What is TomasinoWeb?
                        </h1>
                        <p className={styles["bot-statement"]}>
                            TomasinoWeb is the premier digital media
                            organization of the University of Santo Tomas joined by students who are immensely interested in multimedia journalism.
                        </p>

                        <p className={styles["bot-statement"]}>
                            Its primary goal as a student publication is to deliver relevant information to the Thomasian community through online media.
                        </p>
                    </div>
                </div>
                <div className={styles["redirect-container"]}>
                    <Link href='/departments'>
                        <div id={styles["departments"]}>
                            <h1 className={styles["sub-heading"]}>
                                Departments
                            </h1>
                        </div>
                    </Link>

                    <Link href='/people'>
                        <div id={styles["people"]}>
                            <h1 className={styles["sub-heading"]}>
                                The People
                            </h1>
                        </div>
                    </Link>

                    <Link href='/culture'>
                        <div id={styles["culture"]}>
                            <h1 className={styles["sub-heading"]}>Culture</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default About
