import styles from "../styles/Home.module.css"
import Head from "next/head"
import Link from "next/link"

export default function Home() {
    return (
        <>
            <Head>
                <meta
                    name='description'
                    content='R101 Application Website for TomasinoWeb, The Premier Digital Media Organization of the University of Santo Tomas'
                />
            </Head>
            <div className={styles["maindiv"]}>
                <div>
                    <div>
                        <div className={`${styles["main"]} ${styles["text"]}`}>
                            <h1>
                                Innovation. <br /> Passion. <br /> Dedication.
                                <br />
                            </h1>
                            <p>
                                <span>Do you have what it takes to be a </span>
                                <br /> TomWebber?
                            </p>

                            
                                <Link href='/about'>
                                    <button className={`${styles["submit"]} ${styles["button-deco"]}`}>
                                        TAKE THE CHALLENGE
                                    </button>
                                </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
