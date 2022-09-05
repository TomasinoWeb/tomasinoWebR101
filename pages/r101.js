import styles from '../styles/R101.module.css'

const R101 = () => {
    return (
        <div className={styles['R101']}>
            <div className={styles['r101-hero']}>
                <h1 className={styles['r101-hero-title']}>The</h1>
                <h1 className={styles['r101-hero-title']}>Application</h1>
                <h1 className={styles['r101-hero-title']}>Process</h1>
            </div>
            <div className={styles['r101-card-container']}>
                <div className={styles['r101-card']}>
                    <div className={styles['r101-card-icon-row']}>
                        <img src="/static/form.png" alt='form' className={styles['r101-icon']} />
                        <img src="/static/arrow.png" alt='arrow' className={styles['r101-arrow']} />
                    </div>
                    <div className={styles['r101-card-content-container']}>
                        <h2 className={styles['r101-card-title']}>Formal Application</h2>
                        <p className={styles['r101-card-text']}>
                            Applicants must first accomplish the{" "}
                            <a
                                href='https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Walter_White_S5B.png/220px-Walter_White_S5B.png'
                                target='_blank'
                                rel='noreferrer'>
                                Google Forms
                            </a>{" "}
                            for applicants.
                        </p>
                    </div>
                </div>
                <div className={styles['r101-card']}>
                    <div className={styles['r101-card-icon-row']}>
                        <img src="/static/exam.png" alt='exam' className={styles['r101-icon']} />
                        <img src="/static/arrow.png" alt='arrow' className={styles['r101-arrow']} />
                    </div>
                    <div className={styles['r101-card-content-container']}>
                        <h2 className={styles['r101-card-title']}>Take the exam</h2>
                        <p className={styles['r101-card-text']}>
                            The deparment examination will be sent by our Human
                            Resources department. Skip this step if your
                            department does not have an exam
                        </p>
                    </div>
                </div>
                <div className={styles['r101-card']}>
                    <div className={styles['r101-card-icon-row']}>
                        <img
                            src="/static/exam.png"
                            alt='interview'
                            className={styles['r101-icon']}
                        />
                        <img src="/static/arrow.png" alt='arrow' className={styles['r101-arrow']} />
                    </div>
                    <div className={styles['r101-card-content-container']}>
                        <h2 className={styles['r101-card-title']}>Interview</h2>
                        <p className={styles['r101-card-text']}>
                            After passing your requirements, the Human Resources
                            department will send you a scheduling sheet for the
                            interview.
                        </p>
                    </div>
                </div>
                <div className={styles['r101-card']}>
                    <div className={styles['r101-card-icon-row']}>
                        <img src="/static/result.png" alt='result' className={styles['r101-icon']} />
                    </div>
                    <div className={styles['r101-card-content-container']}>
                        <h2 className={styles['r101-card-title']}>Results</h2>
                        <p className={styles['r101-card-text']}>
                            The results will be sent to you in less than a week
                            by our Human Resources department
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default R101
