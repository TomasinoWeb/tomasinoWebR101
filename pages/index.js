import styles from "../styles/Home.module.css"
import Head from "next/head"

export default function Home() {
    return (
        <>
            <Head>
                <meta
                    name='desription'
                    content='R101 Application Website for TomasinoWeb, The Premier Digital Media Organization of the University of Santo Tomas'
                />
                <link
                    href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css'
                    rel='stylesheet'
                    integrity='sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx'
                    crossorigin='anonymous'></link>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
            </Head>
            <div className={styles["Landing"]}>
                <div className={styles["masthead"]}>
                    <div className='container-fluid'>
                        <div className='row fixed-bottom'>
                            <div className={`col-6 ${styles["main"]} text`}>
                                <h1>
                                    Innovation. <br /> Passion. <br />{" "}
                                    Dedication. <br />
                                </h1>
                                <p>
                                    <span>
                                        Do you have what it takes to be a{" "}
                                    </span>
                                    <br /> TomWebber?{" "}
                                </p>

                                <div className='form'>
                                    <form action='#' target='_blank'>
                                        <div className={styles["button-deco"]}>
                                            <input
                                                type='submit'
                                                value='TAKE THE CHALLENGE'
                                                className={styles["submit"]}
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className='col-6'></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
