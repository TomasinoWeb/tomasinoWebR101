import styles from "../styles/About.module.css"
import Head from "next/head"

const About = () => {
    return (
        <>
            <Head>
                <title>TomasinoWeb R101 | About</title>
                <link
                    href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css'
                    rel='stylesheet'
                    integrity='sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx'
                    crossorigin='anonymous'
                />
                <script
                    src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js'
                    integrity='sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa'
                    crossorigin='anonymous'></script>
            </Head>
            <div className={styles["About"]}>
                <div className='container-fluid'>
                    <div className={`row ${styles["top-container"]}`}>
                        <div className='col-md-5'>
                            <img
                                className={`${styles["TW-img"]} img-responsive`}
                                src='static/logo.png'
                                alt='TomasinoWeb logo'
                            />
                        </div>

                        <div className={`col-md-7 ${styles["copy"]}`}>
                            <h1 className={styles["main-header"]}>
                                What is TomasinoWeb?
                            </h1>
                            <br />
                            <div className={`col-md-10 ${styles["stmnt"]}`}>
                                <p>
                                    <span>
                                        {" "}
                                        TomasinoWeb is the premier digital media
                                        organization{" "}
                                    </span>
                                    <span>
                                        {" "}
                                        of the University of Santo Tomas joined
                                        by students who{" "}
                                    </span>
                                    <span>
                                        {" "}
                                        are immensely interested in multimedia
                                        journalism.
                                    </span>
                                </p>
                                <br />
                                <p>
                                    <span>
                                        Its primary goal as a student
                                        publication is to deliver <br />
                                        relevant information to the Thomasian
                                        community <br />
                                        through online media.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container-fluid'>
                    <div className='row'>
                        <div className={`col-md-4 ${styles["departments"]}`}>
                            <a href='#' className={styles["sub-header"]}>
                                Deparments
                            </a>
                        </div>

                        <div className={`col-md-4 ${styles["people"]}`}>
                            <a href='#' className={styles["sub-header"]}>
                                The People
                            </a>
                        </div>

                        <div className={`col-md-4 ${styles["culture"]}`}>
                            <a href='#' className={styles["sub-header"]}>
                                Culture
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
