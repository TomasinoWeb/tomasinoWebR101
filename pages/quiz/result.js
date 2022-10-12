import styles from "../../styles/QuizResult.module.css"
import Header from "../../components/TransparentHeader"
import Link from "next/link"

const Result = ({ finalName, finalDesc, finalLink }) => {
    return (
        <>
            <Header />
            <div className={styles.quiz}>
                <div className={styles.mainresult}>
                    <div className={styles.result}>
                        <div className={styles.leftpanel}>
                            <h4>Dapat sumali ka sa</h4>
                            <h1>{finalName}</h1>
                            <h3>{finalDesc}</h3>

                            <div className={styles.buttoncenter}>
                                <Link href='/quiz'>
                                    <button>Ulitin ang Quiz</button>
                                </Link>
                                <br />
                                <a
                                    href='https://join.tomasinoweb.org/apply'
                                    target='_blank'
                                    rel='noreferrer'>
                                    <button>Mag-apply Ngayon</button>
                                </a>
                            </div>
                        </div>
                        <div className={styles.rightpanel}>
                            <img src={finalLink} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Result
