import styles from '../../styles/Quiz.module.css'

const Quiz = () => { 
    return(
        <div className={styles.quiz}>
            <div className={styles.main}>
                <h1>Saang sangay ng TomasinoWeb ka nababagay?</h1>
                <p>Kung hindi mo pa alam kung anong org ang ninais ng iyong pusy, isa lang ang ibig sabihin nito: sumali na sa TomasinoWeb &#40;please&#41;. Sagutan ang pagsusulit na ito upang malaman kung saan sangay ng TomasinoWeb ka nababagay</p>
                <button>MAGSIMULA</button>
            </div>
        </div>
    )
}

export default Quiz;