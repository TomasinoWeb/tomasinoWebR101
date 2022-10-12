import styles from "../../styles/Quiz.module.css"
import Header from "../../components/TransparentHeader"
import Link from "next/link"
import Head from "next/head"

const Quiz = () => {
    return (
        <>
        <Head>
            <meta property="og:image" content="https://www.cnnphilippines.com/.imaging/mte/demo-cnn-new/750x450/dam/cnn/2022/8/9/UST-new-tiger-statue-and-block-letters_CNNPH.jpg/jcr:content/UST-new-tiger-statue-and-block-letters_CNNPH.jpg" />
        </Head>
            <Header />
            <div className={styles.quiz}>
                <div className={styles.main}>
                    <h1>Saang sangay ng TomasinoWeb ka nababagay?</h1>
                    <p>
                        Kung hindi mo pa alam kung anong org ang ninais ng iyong
                        pusoy, isa lang ang ibig sabihin nito: sumali na sa
                        TomasinoWeb <i>&#40;plz&#41;</i>. Sagutan ang pagsusulit
                        na ito upang malaman kung saan sangay ng TomasinoWeb ka
                        nababagay
                    </p>
                    <Link href='/quiz/questions'>
                        <button>MAGSIMULA</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Quiz
