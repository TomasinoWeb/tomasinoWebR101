import styles from "../styles/Departments.module.css"
import Head from "next/head"
import Header from "../components/Header"

const Departments = () => {
    return (
        <>
            <Head>
                <title>TomasinoWeb Departments</title>
                <meta name="description" content="Learn more about our different TomasinoWeb departments. Apply now and be a part of our team "/>
            </Head>
            <Header />
            <div className={styles["Departments"]}>
                <div className={styles["departments-hero"]}>
                    <div className={styles["css-typing"]}>
                        <h1>Executive Affairs.</h1>
                        <h1>Publication.</h1>
                        <h1>Web Technologies.</h1>
                    </div>
                </div>

                <section
                    className={`${styles["departments-showcase-section"]} ${styles["white-background"]}`}>
                    <div className={styles["departments-showcase"]}>
                        <div className={styles["departments-left-col"]}>
                            <p
                                className={`${styles["department"]} ${styles["creatives"]}`}>
                                Creatives
                            </p>
                        </div>
                        <div className={styles["departments-right-col"]}>
                            <img
                                src='https://static.wixstatic.com/media/4290cb_a761cae85167405a8db41f8a21d1dd36~mv2.jpg/v1/fill/w_720,h_928,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MOODBOARD_01.jpg'
                                alt='first'
                            />
                        </div>
                    </div>
                </section>

                <section className={styles["departments-showcase-section"]}>
                    <div className={styles["departments-showcase"]}>
                        <div className={styles["departments-left-col"]}>
                            <p
                                className={`${styles["department"]} ${styles["community-development"]}`}>
                                Community Development
                            </p>
                        </div>
                        <div className={styles["departments-right-col"]}>
                            <img
                                src='https://static.wixstatic.com/media/4290cb_dc2716ad17aa4d4e949061faca228a3b~mv2.jpg/v1/fill/w_720,h_928,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4290cb_dc2716ad17aa4d4e949061faca228a3b~mv2.jpg'
                                alt='second'
                            />
                        </div>
                    </div>
                </section>

                <section className={styles["departments-showcase-section"]}>
                    <div className={styles["departments-showcase"]}>
                        <div className={styles["departments-left-col"]}>
                            <p
                                className={`${styles["department"]} ${styles["external-affairs"]}`}>
                                External Affairs
                            </p>
                        </div>
                        <div className={styles["departments-right-col"]}>
                            <img
                                src='https://static.wixstatic.com/media/4290cb_db211c7d3f09495bafa8205ec748797a~mv2.jpg/v1/fill/w_720,h_928,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4290cb_db211c7d3f09495bafa8205ec748797a~mv2.jpg'
                                alt='third'
                            />
                        </div>
                    </div>
                </section>

                <section className={styles["departments-showcase-section"]}>
                    <div className={styles["departments-showcase"]}>
                        <div className={styles["departments-left-col"]}>
                            <p
                                className={`${styles["department"]} ${styles["finance"]}`}>
                                Finance
                            </p>
                        </div>
                        <div className={styles["departments-right-col"]}>
                            <img
                                src='https://static.wixstatic.com/media/4290cb_ae661f11d7d945d6a52f827f257846ab~mv2.jpg/v1/fill/w_720,h_928,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4290cb_ae661f11d7d945d6a52f827f257846ab~mv2.jpg'
                                alt='fourth'
                            />
                        </div>
                    </div>
                </section>

                <section className={styles["departments-showcase-section"]}>
                    <div className={styles["departments-showcase"]}>
                        <div className={styles["departments-left-col"]}>
                            <p
                                className={`${styles["department"]} ${styles["human-resources"]}`}>
                                Human Resources
                            </p>
                        </div>
                        <div className={styles["departments-right-col"]}>
                            <img
                                src='https://static.wixstatic.com/media/4290cb_bfd3538838554196949170a3a049d310~mv2.jpg/v1/fill/w_720,h_928,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4290cb_bfd3538838554196949170a3a049d310~mv2.jpg'
                                alt='fifth'
                            />
                        </div>
                    </div>
                </section>

                <section className={styles["departments-showcase-section"]}>
                    <div className={styles["departments-showcase"]}>
                        <div className={styles["departments-left-col"]}>
                            <p
                                className={`${styles["department"]} ${styles["photography"]}`}>
                                Photography
                            </p>
                        </div>
                        <div className={styles["departments-right-col"]}>
                            <img
                                src='https://static.wixstatic.com/media/4290cb_a031115543ab485091a802cfa7173a7f~mv2.jpg/v1/fill/w_720,h_928,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4290cb_a031115543ab485091a802cfa7173a7f~mv2.jpg'
                                alt='sixth'
                            />
                        </div>
                    </div>
                </section>

                <section className={styles["departments-showcase-section"]}>
                    <div className={styles["departments-showcase"]}>
                        <div className={styles["departments-left-col"]}>
                            <p
                                className={`${styles["department"]} ${styles["publicity"]}`}>
                                Publicity and Communications
                            </p>
                        </div>
                        <div className={styles["departments-right-col"]}>
                            <img
                                src='https://static.wixstatic.com/media/4290cb_a761cae85167405a8db41f8a21d1dd36~mv2.jpg/v1/fill/w_720,h_928,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MOODBOARD_01.jpg'
                                alt='seventh'
                            />
                        </div>
                    </div>
                </section>

                <section className={styles["departments-showcase-section"]}>
                    <div className={styles["departments-showcase"]}>
                        <div className={styles["departments-left-col"]}>
                            <p
                                className={`${styles["department"]} ${styles["secretariat"]}`}>
                                Secretariat
                            </p>
                        </div>
                        <div className={styles["departments-right-col"]}>
                            <img
                                src='https://static.wixstatic.com/media/4290cb_dc2716ad17aa4d4e949061faca228a3b~mv2.jpg/v1/fill/w_720,h_928,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4290cb_dc2716ad17aa4d4e949061faca228a3b~mv2.jpg'
                                alt='eigth'
                            />
                        </div>
                    </div>
                </section>

                <section className={styles["departments-showcase-section"]}>
                    <div className={styles["departments-showcase"]}>
                        <div className={styles["departments-left-col"]}>
                            <p
                                className={`${styles["department"]} ${styles["videography"]}`}>
                                Videography
                            </p>
                        </div>
                        <div className={styles["departments-right-col"]}>
                            <img
                                src='https://static.wixstatic.com/media/4290cb_a031115543ab485091a802cfa7173a7f~mv2.jpg/v1/fill/w_720,h_928,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4290cb_a031115543ab485091a802cfa7173a7f~mv2.jpg'
                                alt='ninth'
                            />
                        </div>
                    </div>
                </section>

                <section className={styles["departments-showcase-section"]}>
                    <div className={styles["departments-showcase"]}>
                        <div className={styles["departments-left-col"]}>
                            <p
                                className={`${styles["department"]} ${styles["web-technologies"]}`}>
                                Web Technologies
                            </p>
                        </div>
                        <div className={styles["departments-right-col"]}>
                            <img
                                src='https://static.wixstatic.com/media/4290cb_db211c7d3f09495bafa8205ec748797a~mv2.jpg/v1/fill/w_720,h_928,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4290cb_db211c7d3f09495bafa8205ec748797a~mv2.jpg'
                                alt='tenth'
                            />
                        </div>
                    </div>
                </section>

                <section className={styles["departments-showcase-section"]}>
                    <div className={styles["departments-showcase"]}>
                        <div className={styles["departments-left-col"]}>
                            <p
                                className={`${styles["department"]} ${styles["writing"]}`}>
                                Writing
                            </p>
                        </div>
                        <div className={styles["departments-right-col"]}>
                            <img
                                src='https://static.wixstatic.com/media/4290cb_ae661f11d7d945d6a52f827f257846ab~mv2.jpg/v1/fill/w_720,h_928,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4290cb_ae661f11d7d945d6a52f827f257846ab~mv2.jpg'
                                alt='eleventh'
                            />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Departments
