import styles from "../styles/Home.module.css"
import Head from "next/head"
import Link from "next/link"
import TransparentHeader from '../components/TransparentHeader'
export default function Home() {
    return (
        <>
            <Head>
                <meta
                    name='description'
                    content='R101 Application Website for TomasinoWeb, The Premier Digital Media Organization of the University of Santo Tomas'
                />
            </Head>
            <TransparentHeader />
            <div className={styles["homepage"]}>
                <div className={styles["main"]}>
                    <div className={styles["container"]}>
                        <div className={styles["heading-wrapper"]}>
                            <h1>Innovation.</h1>
                            <h1>Passion.</h1>
                            <h1>Dedication</h1>
                        </div>
                        <div className={styles["paragraph-wrapper"]}>
                            <p>Do you have what it takes to be a TomWebber?</p>
                        </div>
                        <div className={styles["button-wrapper"]}>
                            <Link href='/about'>
                                <button>TAKE THE CHALLENGE</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
