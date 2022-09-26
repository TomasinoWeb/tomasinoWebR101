import styles from "../styles/Departments.module.css"
import Head from "next/head"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Link from "next/link"
const Departments = () => {
    return (
        <>
            <Head>
                <title>TomasinoWeb Departments</title>
                <meta
                    name='description'
                    content='Learn more about our different TomasinoWeb departments. Apply now and be a part of our team '
                />
            </Head>
            <Header />
            <div className={styles["Departments"]}>
                <div className={styles["departments-hero"]}>
                    <div className={styles["css-typing"]}>
                        <h1>Executive Affairs.</h1>
                        <h1>Publication.</h1>
                        <h1>Web Technologies.</h1>
                    </div>
                    <div className={styles["banner-wrapper"]}>
                        <img src='/static/Banner 1.png' alt='web tech banner' />
                    </div>
                    <div className={styles["bottom-hero-text-wrapper"]}>
                        <h1>
                            Here are the departments that solidify TomasinoWeb
                            in its pursuit to continue its legacy of innovation,
                            passion, and dedication.
                        </h1>
                    </div>
                </div>
                <div
                    className={
                        styles["departments-showcase-section-container"]
                    }>
                    <section
                        className={`${styles["departments-showcase-section"]} ${styles["white-background"]}`}>
                        <div className={styles["departments-showcase"]}>
                            <div className={styles["departments-left-col"]}>
                                <div
                                    className={
                                        styles["department-title-wrapper"]
                                    }>
                                    <h2>Community Development</h2>
                                </div>
                                <div
                                    className={
                                        styles["department-paragraph-wrapper"]
                                    }>
                                    <p>
                                        Social development is at the heart of
                                        the Community Development Department.
                                        Together with the pursuit of social
                                        transformation, the department helps the
                                        partner communities of UST simbahayan
                                    </p>
                                </div>
                            </div>
                            <div
                                className={styles["departments-right-col"]}
                                id={styles["community-development"]}></div>
                        </div>
                    </section>

                    <section
                        className={`${styles["departments-showcase-section"]} ${styles["white-background"]}`}>
                        <div className={styles["departments-showcase"]}>
                            <div className={styles["departments-left-col"]}>
                                <div
                                    className={
                                        styles["department-title-wrapper"]
                                    }>
                                    <h2>Creatives</h2>
                                </div>
                                <div
                                    className={
                                        styles["department-paragraph-wrapper"]
                                    }>
                                    <p>
                                        Artists narrate stories through their
                                        impactful artworks. They draw, create,
                                        and make the impossible possible.
                                    </p>
                                    <small>
                                        TEAMS: Graphic design and Illustration
                                    </small>
                                </div>
                            </div>
                            <div
                                className={styles["departments-right-col"]}
                                id={styles["creatives"]}></div>
                        </div>
                    </section>

                    <section
                        className={`${styles["departments-showcase-section"]} ${styles["white-background"]}`}>
                        <div className={styles["departments-showcase"]}>
                            <div className={styles["departments-left-col"]}>
                                <div
                                    className={
                                        styles["department-title-wrapper"]
                                    }>
                                    <h2>External Affairs</h2>
                                </div>
                                <div
                                    className={
                                        styles["department-paragraph-wrapper"]
                                    }>
                                    <p>
                                        Through the power of linkages and
                                        partnerships, the External Affairs
                                        department connects digital journalism
                                        to people of various affiliations, as
                                        well as managing it&#39;s brand identity
                                        online
                                    </p>
                                </div>
                            </div>
                            <div
                                className={styles["departments-right-col"]}
                                id={styles["external-affairs"]}></div>
                        </div>
                    </section>

                    <section
                        className={`${styles["departments-showcase-section"]} ${styles["white-background"]}`}>
                        <div className={styles["departments-showcase"]}>
                            <div className={styles["departments-left-col"]}>
                                <div
                                    className={
                                        styles["department-title-wrapper"]
                                    }>
                                    <h2>Finance</h2>
                                </div>
                                <div
                                    className={
                                        styles["department-paragraph-wrapper"]
                                    }>
                                    <p>
                                        With great attention to detail and
                                        numbers, the Finance department manages
                                        the financial needs and edmands of the
                                        premier digital media organization of
                                        the University.
                                    </p>
                                </div>
                            </div>
                            <div
                                className={styles["departments-right-col"]}
                                id={styles.finance}></div>
                        </div>
                    </section>

                    <section
                        className={`${styles["departments-showcase-section"]} ${styles["white-background"]}`}>
                        <div className={styles["departments-showcase"]}>
                            <div className={styles["departments-left-col"]}>
                                <div
                                    className={
                                        styles["department-title-wrapper"]
                                    }>
                                    <h2>Human Resources</h2>
                                </div>
                                <div
                                    className={
                                        styles["department-paragraph-wrapper"]
                                    }>
                                    <p>
                                        Internal communication and development
                                        are two of the greatest assets of any
                                        organization. With the Human Resources
                                        department, members are assesd and
                                        empowered to grow as budding young
                                        professionals.
                                    </p>
                                </div>
                            </div>
                            <div
                                className={styles["departments-right-col"]}
                                id={styles["human-resources"]}></div>
                        </div>
                    </section>

                    <section
                        className={`${styles["departments-showcase-section"]} ${styles["white-background"]}`}>
                        <div className={styles["departments-showcase"]}>
                            <div className={styles["departments-left-col"]}>
                                <div
                                    className={
                                        styles["department-title-wrapper"]
                                    }>
                                    <h2>Photography</h2>
                                </div>
                                <div
                                    className={
                                        styles["department-paragraph-wrapper"]
                                    }>
                                    <p>
                                        Photographers are able to tell a story
                                        beyong words, and capture the unseed
                                        facets of the dominant narratives from
                                        all angles and persepectives.
                                    </p>
                                    <small>
                                        TEAMS: Events, Sports, Portraits, and
                                        Photojournalism
                                    </small>
                                </div>
                            </div>
                            <div
                                className={styles["departments-right-col"]}
                                id={styles.photography}></div>
                        </div>
                    </section>

                    <section
                        className={`${styles["departments-showcase-section"]} ${styles["white-background"]}`}>
                        <div className={styles["departments-showcase"]}>
                            <div className={styles["departments-left-col"]}>
                                <div
                                    className={
                                        styles["department-title-wrapper"]
                                    }>
                                    <h2>Publicity and Communications</h2>
                                </div>
                                <div
                                    className={
                                        styles["department-paragraph-wrapper"]
                                    }>
                                    <p>
                                        Garnering a wide audience, publicists
                                        tackle the spread of projects,
                                        engagements, and content of the
                                        organization to reach every single
                                        member of the Thomasian community.
                                    </p>
                                </div>
                            </div>
                            <div
                                className={styles["departments-right-col"]}
                                id={styles.publicity}></div>
                        </div>
                    </section>

                    <section
                        className={`${styles["departments-showcase-section"]} ${styles["white-background"]}`}>
                        <div className={styles["departments-showcase"]}>
                            <div className={styles["departments-left-col"]}>
                                <div
                                    className={
                                        styles["department-title-wrapper"]
                                    }>
                                    <h2>Secretariat</h2>
                                </div>
                                <div
                                    className={
                                        styles["department-paragraph-wrapper"]
                                    }>
                                    <p>
                                        Efficient and adaptable, secretaries
                                        ensure that documents and transactions
                                        are kept and created through organized
                                        systems
                                    </p>
                                </div>
                            </div>
                            <div
                                className={styles["departments-right-col"]}
                                id={styles.secretariat}></div>
                        </div>
                    </section>

                    <section
                        className={`${styles["departments-showcase-section"]} ${styles["white-background"]}`}>
                        <div className={styles["departments-showcase"]}>
                            <div className={styles["departments-left-col"]}>
                                <div
                                    className={
                                        styles["department-title-wrapper"]
                                    }>
                                    <h2>Videography</h2>
                                </div>
                                <div
                                    className={
                                        styles["department-paragraph-wrapper"]
                                    }>
                                    <p>
                                        Videographers tell stories through
                                        frames in motion and angles you&#39;ve
                                        never seen before.
                                    </p>
                                    <small>
                                        TEAMS: Camera Operations Team,
                                        Screenwriting and Storyboarding Team,
                                        and the Editing Team
                                    </small>
                                </div>
                            </div>
                            <div
                                className={styles["departments-right-col"]}
                                id={styles.videography}></div>
                        </div>
                    </section>

                    <section
                        className={`${styles["departments-showcase-section"]} ${styles["white-background"]}`}>
                        <div className={styles["departments-showcase"]}>
                            <div className={styles["departments-left-col"]}>
                                <div
                                    className={
                                        styles["department-title-wrapper"]
                                    }>
                                    <h2>Web Technologies</h2>
                                </div>
                                <div
                                    className={
                                        styles["department-paragraph-wrapper"]
                                    }>
                                    <p>
                                        Web Technologists are the competitive
                                        game changers in the modern world. They
                                        innovate, lead, and evolve the way we
                                        tell stories today.
                                    </p>
                                    <small>
                                        TEAMS: Front-end, Back-end, and UI/UX
                                        Design
                                    </small>
                                </div>
                            </div>
                            <div
                                className={styles["departments-right-col"]}
                                id={styles.webtech}></div>
                        </div>
                    </section>

                    <section
                        className={`${styles["departments-showcase-section"]} ${styles["white-background"]} ${styles["plus268"]}`}>
                        <div className={styles["departments-showcase"]}>
                            <div className={styles["departments-left-col"]}>
                                <div
                                    className={
                                        styles["department-title-wrapper"]
                                    }>
                                    <h2>Writing</h2>
                                </div>
                                <div
                                    className={
                                        styles["department-paragraph-wrapper"]
                                    }>
                                    <p>
                                        Writers are not just limited to telling
                                        stories. They disturb the undisturbed,
                                        and take it upon themselves to make sure
                                        that the necessary truths see the light
                                        of day.
                                    </p>
                                    <small>
                                        SECTIONS: Reports, Stories (Features and
                                        Literary), Blogs, and Sports
                                    </small>
                                </div>
                            </div>
                            <div
                                className={styles["departments-right-col"]}
                                id={styles.writing}></div>
                        </div>

                        <div className={styles["bottom-banner"]}>
                            <div
                                className={
                                    styles["bottom-banner-text-wrapper"]
                                }>
                                <h2>WHAT DO YOU SAY?</h2>
                            </div>
                            <div
                                className={
                                    styles["bottom-banner-button-wrapper"]
                                }>
                                <a
                                    href='https://forms.gle/WyzZ99XBtZjVLPdH7'
                                    target='_blank'
                                    rel='noreferrer'>
                                    <button>TAKE THE CHALLENGE</button>
                                </a>
                                <Link href='/culture'>
                                    <button>WHAT&#39;S IT LIKE IN TW?</button>
                                </Link>
                            </div>
                        </div>

                        <Footer />
                    </section>
                </div>
            </div>
        </>
    )
}

export default Departments
