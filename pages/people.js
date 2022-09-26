import styles from "../styles/People.module.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Image from "next/image"

const People = () => {
    return (
        <>
            <Header />
            <div className={styles["People"]}>
                <div className={styles["main-container"]}>
                    <h1 className={styles["front-text"]}>
                        &#8220;I was a wide-eyed freshman when I joined{" "}
                        <i>TomasinoWeb</i>. They helped me develop my expertise
                        and passion as I worked with diverse and like-minded
                        people who enthusiastically dabble in storytelling,
                        community development, civic engagement, and student
                        leadership. With everyone&#39;s support and initiative,
                        it is always a thrill to work with them in pursuit of
                        impactful and moving conversations.&#8221;
                    </h1>
                    <br />
                    <p className={styles["name-pos"]}>
                        Mikaela Gabrielle De Castro
                    </p>
                    <p className={styles["name-pos"]}>
                        Blogs Editor &#40;PY 2021-Present&#41;
                    </p>
                </div>
                <div className={styles["divider"]}></div>

                <div className={styles["divider"]}></div>
                <div className={styles["circle-section"]}>
                    <div className={styles["image-section-1"]}>
                        <Image
                            src='/static/Angelo.JPG'
                            className={styles["circle-image"]}
                            alt='icon'
                            width={300}
                            height={300}
                        />
                        <Image
                            src='/static/Drey.jpg'
                            className={styles["circle-image"]}
                            alt='icon'
                            width={300}
                            height={300}
                        />
                        <Image
                            src='/static/Eri.jpg'
                            className={styles["circle-image"]}
                            alt='icon'
                            width={300}
                            height={300}
                        />
                        <Image
                            src='/static/Genise.JPG'
                            className={styles["circle-image"]}
                            alt='icon'
                            width={300}
                            height={300}
                        />
                        <Image
                            src='/static/Jianne.jpg'
                            className={styles["circle-image"]}
                            alt='icon'
                            width={300}
                            height={300}
                        />
                        <Image
                            src='/static/Johann.jpg'
                            className={styles["circle-image"]}
                            alt='icon'
                            width={300}
                            height={300}
                        />
                        <Image
                            src='/static/Juliana.jpg'
                            className={styles["circle-image"]}
                            alt='icon'
                            width={300}
                            height={300}
                        />
                        <Image
                            src='/static/julius.jpg'
                            className={styles["circle-image"]}
                            alt='icon'
                            width={300}
                            height={300}
                        />
                        <Image
                            src='/static/Mika.JPG'
                            className={styles["circle-image"]}
                            alt='icon'
                            width={300}
                            height={300}
                        />
                        <Image
                            src='/static/Paolo.jpg'
                            className={styles["circle-image"]}
                            alt='icon'
                            width={300}
                            height={300}
                        />
                        <Image
                            src='/static/Sharmaine.jpg'
                            className={styles["circle-image"]}
                            alt='icon'
                            width={300}
                            height={300}
                        />
                        <Image
                            src='/static/Yuan.jpg'
                            className={styles["circle-image"]}
                            alt='icon'
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
                <div className={styles["divider"]}></div>
                <div className={styles["divider"]}></div>
                <div className={styles["divider"]}></div>
                <div className={styles["count-section-1"]}>
                    <p className={styles["count"]}>69 TomWebbers</p>
                    <br />
                    <p className={styles["desc"]}>
                        and counting! We&#39;re a bunch of sleep-deprived yet
                        ambitious undergrads from different colleges and
                        faculties.
                    </p>

                    <div className={styles["divider"]}></div>

                    <div className={styles["image-section-2"]}>
                        <Image
                            src='/static/uDGL6KW.png'
                            className={styles["portrait-image"]}
                            width={321}
                            height={420}
                            alt='icon'
                        />
                        <Image
                            src='/static/kTBb7ss.png'
                            className={styles["portrait-image"]}
                            width={328}
                            height={420}
                            alt='icon'
                        />
                        <Image
                            src='/static/image 6.png'
                            className={styles["portrait-image"]}
                            width={366}
                            height={499}
                            alt='icon'
                        />
                    </div>
                </div>
                <div className={styles["divider"]}></div>
                <div className={styles["divider"]}></div>
                <div className={styles["divider"]}></div>
                <div className={styles["count-section-2"]}>
                    <p className={styles["count"]}>15 years</p>
                    <br />
                    <p className={styles["desc"]}>
                        of innovation, passion, and dedication.
                    </p>

                    <div className={styles["divider"]}></div>

                    <div className={styles["testimony-section"]}>
                        <div className={styles["testimony-container-left"]}>
                            <div className={styles["test-image-section"]}>
                                <Image
                                    src='/static/Laqui.jpg'
                                    className={styles["test-image"]}
                                    width={130}
                                    height={130}
                                    alt='icon'
                                />
                            </div>

                            <br />

                            <div className={styles["testimony-left"]}>
                                <p className={styles["testimony-text"]}>
                                    As a journalism student, <i>TomasinoWeb</i>{" "}
                                    helped me to become more aware of the
                                    happenings within and outside the
                                    University. It also allowed me to work
                                    alongside people in the field &#40;campus
                                    press, local and international press&#41;.
                                    But the thing I like the most is at this
                                    period of my life as a student, I got front
                                    row seats in history. At one instance, I
                                    witnessed how a glimmer of hope in this
                                    country rose and how it died quickly in one
                                    day.
                                </p>
                                <br />
                                <p className={styles["name-pos"]}>
                                    Christian Patrick Laqui
                                </p>
                                <p className={styles["name-pos"]}>
                                    Reports Editor &#40;PY 2021-Present&#41;
                                </p>
                            </div>
                        </div>

                        <div className={styles["divider"]}></div>
                        <div className={styles["divider"]}></div>

                        <div className={styles["testimony-container-right"]}>
                            <div className={styles["test-image-section"]}>
                                <Image
                                    src='/static/Bote.jpg'
                                    className={styles["test-image"]}
                                    width={130}
                                    height={130}
                                    alt='icon'
                                />
                            </div>

                            <br />

                            <div className={styles["testimony-right"]}>
                                <p className={styles["testimony-text"]}>
                                    TW taught me the following: 1&#41; service
                                    without sacrifice is complacency, 2&#41; the
                                    smallest details are just as important as
                                    the big ones, and 3&#41; college life can be
                                    productive and fun at the same time. If
                                    given the time and opportunity, I would join
                                    the organization again in a heartbeat.
                                    <div className={styles["divider"]}></div>
                                    <i>Dogshow version: msaya xia…</i>
                                </p>

                                <br />
                                <p className={styles["name-pos-right"]}>
                                    Rabin Bote
                                </p>
                                <p className={styles["name-pos-right"]}>
                                    Former President &#40;PY 2019-2020&#41;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["divider"]}></div>
                <div className={styles["divider"]}></div>
                <Image
                    src='/static/Banner 4.png'
                    className={styles["gray-divide"]}
                    alt='icon'
                    width={1440}
                    height={268}
                />

                <div className={styles["divider"]}></div>
                <div className={styles["divider"]}></div>

                <div className={styles["alumni-section"]}>
                    <p className={styles["alumni-title"]}>THE CORE GROUP</p>
                    <p className={styles["alumni-desc"]}>
                        The heads of TomasinoWeb
                    </p>

                    <div className={styles["divider"]}></div>

                    <div className={styles["alumni-img-section"]}>
                        <Image
                            alt="icon"
                            width={500}
                            height={750}
                            src='/static/Zamora.png'
                            className={styles["alumni-image"]}
                        />
                        <Image
                            alt="icon"
                            width={500}
                            height={750}
                            src='/static/Visaya.png'
                            className={styles["alumni-image"]}
                        />
                        <Image
                            alt="icon"
                            width={500}
                            height={750}
                            src='/static/Isaac.png'
                            className={styles["alumni-image"]}
                        />

                        <Image
                            alt="icon"
                            width={500}
                            height={750}
                            src='/static/Garcia.png'
                            className={styles["alumni-image"]}
                        />
                        <Image
                            alt="icon"
                            width={500}
                            height={750}
                            src='/static/Tuason.png'
                            className={styles["alumni-image"]}
                        />
                        <Image
                            alt="icon"
                            width={500}
                            height={750}
                            src='/static/Baria.png'
                            className={styles["alumni-image"]}
                        />
                    </div>
                </div>
                <div className={styles["divider"]}></div>
                <div className={styles["divider"]}></div>
                <div className={styles["count-section-three"]}>
                    <p className={styles["count"]}>12 months</p>
                    <br />
                    <p className={styles["desc"]}>
                        of a challenging yet dynamic publication year.
                    </p>

                    <div className={styles["divider"]}></div>

                    <div className={styles["testimony-section"]}>
                        <div className={styles["testimony-container-left"]}>
                            <div className={styles["test-image-section"]}>
                                <img
                                    src='/static/Jacer.jpg'
                                    className={styles["test-image"]}
                                />
                            </div>

                            <br />

                            <div className={styles["testimony-left"]}>
                                <p className={styles["testimony-text"]}>
                                    Like all freshies, I was a newbie, yet I
                                    felt welcomed and at home right away. I
                                    always wonder why the people in this
                                    organization are so passionate, and I later
                                    knew the answer: Hindi natutulog ang balita.
                                    I found this to be so brave and admirable.
                                    My way of connecting and giving back to the
                                    organization as part of HR is to care about
                                    the mental well-being and growth of each
                                    member in <i>TomasinoWeb</i>.
                                </p>
                                <br />
                                <p className={styles["name-pos"]}>
                                    Aeliah Jolie Jacer
                                </p>
                                <p className={styles["name-pos"]}>
                                    Human Resources member &#40;PY
                                    2020-Present&#41;
                                </p>
                            </div>
                        </div>

                        <div className={styles["divider"]}></div>
                        <div className={styles["divider"]}></div>

                        <div className={styles["testimony-container-right"]}>
                            <div className={styles["test-image-section"]}>
                                <img
                                    src='/static/Tapawan.jpeg'
                                    className={styles["test-image"]}
                                />
                            </div>

                            <br />

                            <div className={styles["testimony-right"]}>
                                <p className={styles["testimony-text"]}>
                                    Work doesn&#39;t feel like work when you are
                                    working with
                                    <i>TomasinoWeb</i>. It&#39;s more than just
                                    an organization and I am forever grateful to
                                    be a part of it.
                                </p>
                                <br />
                                <p className={styles["name-pos-right"]}>
                                    Christine Annmarie Tapawan
                                </p>
                                <p className={styles["name-pos-right"]}>
                                    Former Chief Photographer &#40;PY
                                    2019-2021&#41;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["divider"]}></div>
                <div className={styles["divider"]}></div>
                <center className={styles["bottom-section"]}>
                    <div className={styles["bottom-cont"]}>
                        <img
                            src='/static/lOvT88k.jpg'
                            className={styles["twphoto"]}
                            alt='tw-photo'
                        />
                        <div className={styles["bottom-text"]}>
                            <p className={styles["bottom-title"]}>
                                ARE YOU READY TO INNOVATE AND LEAD THE MODERN
                                WEB?
                            </p>
                            <div className={styles["button-cont"]}>
                                <button>TAKE THE CHALLENGE</button>
                                <button>HM, WHERE DO I FIT?</button>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
            <Footer />
        </>
    )
}

export default People
