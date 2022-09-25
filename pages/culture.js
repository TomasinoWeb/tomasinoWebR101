/* eslint-disable @next/next/no-img-element */
import Header from "../components/Header"
import styles from "../styles/Culture.module.css"
import Link from "next/link"
import Footer from '../components/Footer'
const Culture = () => {
    return (
        <>
            <Header />
            <div className={styles["culture"]}>
                <section className={styles["header"]}>
                    <div className={styles["showcase-container"]}>
                        <div className={styles["showcase-text-container"]}>
                            <h1 className={styles["showcase-title"]}>
                                &#34;What is the org culture like?&#34;
                            </h1>
                            <p className={styles["showcase-paragraph"]}>
                                is a question we love to answer&#46; While the
                                dynamics have greatly shifted in the past two
                                years&#44; the fun and work just keeps
                                evolving&#46; Let us take you on a quick
                                ride&#46;
                            </p>
                        </div>
                        <div className={styles["showcase-image-container"]}>
                            <img
                                src='/static/Shakeyhands.png'
                                alt='hands'
                                className={styles["showcase-image"]}
                            />
                        </div>
                    </div>
                    <p></p>
                    <div className={styles["header-bottom-section"]}>
                        <h2>Here&#39;s TomasinoWeb in numbers</h2>
                        <div className={styles["header-cards-container"]}>
                            <div className={styles["header-card"]}>
                                <h2 className={styles["header-card-title"]}>
                                    69 members
                                </h2>
                                <p className={styles["header-card-paragraph"]}>
                                    and counting
                                </p>
                            </div>
                            <div className={styles["header-card"]}>
                                <h2 className={styles["header-card-title"]}>
                                    15 years
                                </h2>
                                <p className={styles["header-card-paragraph"]}>
                                    of innovation&#44; passion&#44; and
                                    dedication{" "}
                                </p>
                            </div>
                            <div className={styles["header-card"]}>
                                <h2 className={styles["header-card-title"]}>
                                    26&#44;333&#44;581
                                </h2>
                                <p className={styles["header-card-paragraph"]}>
                                    combined engangements in the past year
                                </p>
                            </div>
                            <div className={styles["header-card"]}>
                                <h2 className={styles["header-card-title"]}>
                                    5 game nights
                                </h2>
                                <p className={styles["header-card-paragraph"]}>
                                    per month
                                </p>
                            </div>
                            <div className={styles["header-card"]}>
                                <h2 className={styles["header-card-title"]}>
                                    10 awards
                                </h2>
                                <p className={styles["header-card-paragraph"]}>
                                    from prestigious contests &#38; globally
                                    recognized institutions
                                </p>
                            </div>
                            <div className={styles["header-card"]}>
                                <h2 className={styles["header-card-title"]}>
                                    20
                                </h2>
                                <p className={styles["header-card-paragraph"]}>
                                    Genshin Impact players
                                </p>
                            </div>
                            <div className={styles["header-card"]}>
                                <h2 className={styles["header-card-title"]}>
                                    156&#44;750
                                </h2>
                                <p className={styles["header-card-paragraph"]}>
                                    combined following on social media
                                </p>
                            </div>
                            <div className={styles["header-card"]}>
                                <h2 className={styles["header-card-title"]}>
                                    1&#46;6 gigabytes
                                </h2>
                                <p className={styles["header-card-paragraph"]}>
                                    of kalat
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles["testimonial-section"]}>
                    <div className={styles["testimonial-section-wrapper"]}>
                        <div className={styles["testimonial-text-container"]}>
                            <p className={styles["testimonial-paragraph"]}>
                                Joining and ultimately staying in TomWeb will
                                always be one of the best decisions I made in my
                                collegiate journey&#46; On top of the immersion
                                into campus journalism and student
                                leadership&#44; it was also through this
                                organization that I realized how much more
                                capable I was in terms of work&#46; That I could
                                actually contribute much more as both me and the
                                organization grew&#46;
                            </p>
                            <p className={styles["testimonial-paragraph"]}>
                                I also met people that I created invaluable
                                connections with and it was through them that I
                                experienced what an ideal working environment
                                should be&#46; One filled with equal
                                dedication&#44; passion and cooperation rather
                                than seniority and competition&#46;
                            </p>
                            <small>
                                Jose Rafael Ballecer
                                <br />
                                Former Executive Vice President &#40;PY
                                2020-2022&#41;
                            </small>
                        </div>
                        <div className={styles["testimonial-image-container"]}>
                            <img
                                src='/static/BALLECER&#44; Jose Rafael C.jpeg'
                                alt='BALLECER'
                            />
                        </div>
                    </div>
                </section>

                <section className={styles["content-container"]}>
                    <div className={styles["title-container"]}>
                        <h2>All the fun starts here</h2>
                    </div>
                    <div className={styles["card-container"]}>
                        <div className={styles["card-wrapper"]}>
                            <div className={styles["card"]}>
                                <img
                                    src='/static/GameNights.png'
                                    alt='Game Nights'
                                    className={styles["card-image"]}
                                />
                                <div className={styles["card-title-container"]}>
                                    <h3>Game Nights</h3>
                                </div>
                                <div className={styles["card-text-container"]}>
                                    <p>
                                        Have we told you we have a small gaming
                                        community in TomasinoWeb&#63; There are
                                        casual game nights where everyone is
                                        welcome to join&#33;
                                    </p>
                                </div>
                            </div>
                            <div className={styles["card"]}>
                                <img
                                    src='/static/pptParty.png'
                                    alt='PowerPoint Parties'
                                    className={styles["card-image"]}
                                />
                                <div className={styles["card-title-container"]}>
                                    <h3>PowerPoint Parties</h3>
                                </div>
                                <div className={styles["card-text-container"]}>
                                    <p>
                                        &#46;&#46;&#46; of varying themes&#33;
                                        We host one from time to time&#44;
                                        depending on the theme of the
                                        season&#46;
                                    </p>
                                </div>
                            </div>
                            <div className={styles["card"]}>
                                <img
                                    src='/static/movieNights.png'
                                    alt='movieNights'
                                    className={styles["card-image"]}
                                />
                                <div className={styles["card-title-container"]}>
                                    <h3>Movie Nights</h3>
                                </div>
                                <div className={styles["card-text-container"]}>
                                    <p>
                                        Something that we&#39;ve been trying to
                                        resurrect since the rise of the busy
                                        coverage season&#46; What&#39;s your
                                        favorite film&#63;
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles["testimonial-section"]}>
                    <div className={styles["testimonial-section-wrapper"]}>
                        <div className={styles["testimonial-text-container"]}>
                            <p className={styles["testimonial-paragraph"]}>
                                Joining orgs wasn&#39;t exactly my plan&#44; but
                                being a TomasinoWeb writer helped me love
                                writing again&#46; I met amazing people who have
                                better humor than me&#46; And even if it took a
                                while before I got comfortable talking with
                                them&#44; I&#39;d say joining TW is definitely
                                one of the best choices I&#39;ve made—and
                                that&#39;s coming from someone who has a bad
                                track record in decision-making&#46;
                            </p>
                            <small>
                                Kurt Alec Mira
                                <br />
                                Blogs Writer &#40;PY 2021-Present&#41;
                            </small>
                        </div>
                        <div className={styles["testimonial-image-container"]}>
                            <img src='static/Mira, Kurt.jpeg' alt='Mira' />
                        </div>
                    </div>
                </section>

                <section className={styles["content-container"]}>
                    <div className={styles["title-container"]}>
                        <h2>And the work itself</h2>
                    </div>
                    <div className={styles["card-container"]}>
                        <div className={styles["card-wrapper"]}>
                            <div className={styles["landscape-card"]}>
                                <img
                                    src='/static/Onsite_coverages.png'
                                    alt='onsite coverages'
                                    className={styles["card-image"]}
                                />
                                <div className={styles["card-title-container"]}>
                                    <h3>Onsite coverages</h3>
                                </div>
                                <div className={styles["card-text-container"]}>
                                    <p>
                                        Never been to this place&#63; Or have
                                        you already&#63; TomasinoWeb often goes
                                        to onsite coverages where our
                                        publication reports everything on
                                        ground&#46;
                                    </p>
                                </div>
                            </div>
                            <div className={styles["landscape-card"]}>
                                <img
                                    src='/static/VirtualCoverages.png'
                                    alt='Virtual coverages'
                                    className={styles["card-image"]}
                                />
                                <div className={styles["card-title-container"]}>
                                    <h3>Virtual coverages</h3>
                                </div>
                                <div className={styles["card-text-container"]}>
                                    <p>
                                        But what if you can&#39;t join
                                        physically&#63; What if the event is
                                        impossible to get to&#63; That&#39;s
                                        where we convene in our virtual
                                        newsroom&#46;
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles["testimonial-section"]}>
                    <div className={styles["testimonial-section-wrapper"]}>
                        <div className={styles["testimonial-text-container"]}>
                            <p className={styles["testimonial-paragraph"]}>
                                TomasinoWeb&#44; cliché as it may sound&#44; has
                                been one of the reasons for my growth as a
                                person&#44; as well as a campus journalist&#46;
                                I first joined the organization with fear of
                                venturing possibilities&#44; but with the
                                organization&#39;s never-ending trust&#44; I
                                could step out of my comfort zone and unleash my
                                greatest potential as a photojournalist&#46;
                                Indeed&#44; TomasinoWeb is more than just what
                                you know; all the unending opportunities and
                                support they have given me and the comfort they
                                give that is close to &#39;home&#39; is what
                                kept me going for the past years of my stay in
                                the organization&#46;
                            </p>
                            <small>
                                Kenneth Cedric Landazabal
                                <br />
                                Senior Photographer for Sports
                                &#40;2022-Present&#41;
                            </small>
                        </div>
                        <div className={styles["testimonial-image-container"]}>
                            <img
                                src='static/Landazabal, Kenneth Cedric.jpg'
                                alt='Landazabal'
                            />
                        </div>
                    </div>
                </section>

                <section className={styles["content-container"]}>
                    <div className={styles["title-container"]}>
                        <h2>And the work itself</h2>
                    </div>
                    <div className={styles["card-container"]}>
                        <div className={styles["card-wrapper"]}>
                            <div className={styles["landscape-card"]}>
                                <img
                                    src='/static/Interactivemeetings.png'
                                    alt='Interactive meetings'
                                    className={styles["card-image"]}
                                />
                                <div className={styles["card-title-container"]}>
                                    <h3>Interactive meetings</h3>
                                </div>
                                <div className={styles["card-text-container"]}>
                                    <p>
                                        Have you ever been in a meeting where
                                        all you had to do was say yes&#44;
                                        no&#44; and goodbye&#63; That won&#39;t
                                        be the case in TomasinoWeb&#46; Your
                                        decisions and thoughts matter&#44; no
                                        matter what meeting it is&#46;
                                    </p>
                                </div>
                            </div>
                            <div className={styles["landscape-card"]}>
                                <img
                                    src='/static/mentor.png'
                                    alt='Mentorship and collaboration'
                                    className={styles["card-image"]}
                                />
                                <div className={styles["card-title-container"]}>
                                    <h3>Mentorship and collaboration</h3>
                                </div>
                                <div className={styles["card-text-container"]}>
                                    <p>
                                        In TomasinoWeb&#44; we encourage
                                        collaborations&#46; Though it
                                        doesn&#39;t stop there&#33; We even
                                        encourage cross-department
                                        contributions&#46; Expand your horizons
                                        with us&#33;
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles["people-showcase"]}>
                    <div className={styles["people-text-container"]}>
                        <h2>
                            &#34;Who are the people behind the scenes&#63;&#34;
                        </h2>
                        <button>
                            <a href='#'>OUR COMMUNITY</a>
                        </button>
                    </div>
                    <div className={styles["people-container"]}>
                        <img
                            src='/static/Jianne.jpg'
                            className={styles["people"]}
                            alt='Jianne'
                        />
                        <img
                            src='/static/Brin (2).JPG'
                            className={styles["people"]}
                            alt='Brin'
                        />
                        <img
                            src='/static/Alejandrino.jpg'
                            className={styles["people"]}
                            alt='Alejandrino'
                        />
                        <img
                            src='/static/Genise.JPG'
                            className={styles["people"]}
                            alt='Genise'
                        />
                        <img
                            src='/static/Juliana.jpg'
                            className={styles["people"]}
                            alt='Juliana'
                        />
                        <img
                            src='/static/julius.jpg'
                            className={styles["people"]}
                            alt='Julius'
                        />
                        <img
                            src='/static/Mika.JPG'
                            className={styles["people"]}
                            alt='Mika'
                        />
                        <img
                            src='/static/teen.JPG'
                            className={styles["people"]}
                            alt='teen'
                        />
                    </div>
                </section>

                <section className={styles["bottom-banner"]}>
                    <div className={styles["banner-text"]}>
                        <h2>WHAT DO YOU SAY&#63;</h2>
                    </div>
                    <div className={styles["bottom-banner-buttons-container"]}>
                        <button className={styles["bottom-banner-buttons"]}>
                            <a
                                href='https://forms.gle/WyzZ99XBtZjVLPdH7'
                                target='_blank'
                                rel='noreferrer'>
                                TAKE THE CHALLENGE
                            </a>
                        </button>
                        <Link href='/departments'>
                            <button className={styles["bottom-banner-buttons"]}>
                                <a href=''>HM&#44; WHERE DO I FIT&#63;</a>
                            </button>
                        </Link>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Culture
