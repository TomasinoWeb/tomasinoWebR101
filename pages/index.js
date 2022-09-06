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
            </Head>
            <div className={styles.container}>
                <h1>Page not found</h1>
            </div>
        </>
    )
}
