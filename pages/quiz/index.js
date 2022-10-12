import styles from "../../styles/Quiz.module.css"
import Header from "../../components/TransparentHeader"
import Link from "next/link"
const Quiz = () => {
    return (
        <>
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
                    <Link href='/quiz/question'>
                        <button>MAGSIMULA</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Quiz
