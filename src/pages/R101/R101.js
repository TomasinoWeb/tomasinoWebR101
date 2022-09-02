import "./r101.css"
import form from "../../assets/form.png"
import arrow from "../../assets/arrow.png"
import exam from "../../assets/exam.png"
import interview from "../../assets/interview.png"
import result from "../../assets/result.png"

const R101 = () => {
    return (
        <div className='R101'>
            <div className='r101-hero'>
                <h1 className='r101-hero-title'>The</h1>
                <h1 className='r101-hero-title'>Application</h1>
                <h1 className='r101-hero-title'>Process</h1>
            </div>
            <div className='r101-card-container'>
                <div className='r101-card'>
                    <div className='r101-card-icon-row'>
                        <img src={form} alt='form' className='r101-icon' />
                        <img src={arrow} alt='arrow' className='r101-arrow' />
                    </div>
                    <div className='r101-card-content-container'>
                        <h2 className='r101-card-title'>Formal Application</h2>
                        <p className='r101-card-text'>
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
                <div className='r101-card'>
                    <div className='r101-card-icon-row'>
                        <img src={exam} alt='exam' className='r101-icon' />
                        <img src={arrow} alt='arrow' className='r101-arrow' />
                    </div>
                    <div className='r101-card-content-container'>
                        <h2 className='r101-card-title'>Take the exam</h2>
                        <p className='r101-card-text'>
                            The deparment examination will be sent by our Human
                            Resources department. Skip this step if your
                            department does not have an exam
                        </p>
                    </div>
                </div>
                <div className='r101-card'>
                    <div className='r101-card-icon-row'>
                        <img
                            src={interview}
                            alt='interview'
                            className='r101-icon'
                        />
                        <img src={arrow} alt='arrow' className='r101-arrow' />
                    </div>
                    <div className='r101-card-content-container'>
                        <h2 className='r101-card-title'>Interview</h2>
                        <p className='r101-card-text'>
                            After passing your requirements, the Human Resources
                            department will send you a scheduling sheet for the
                            interview.
                        </p>
                    </div>
                </div>
                <div className='r101-card'>
                    <div className='r101-card-icon-row'>
                        <img src={result} alt='result' className='r101-icon' />
                    </div>
                    <div className='r101-card-content-container'>
                        <h2 className='r101-card-title'>Results</h2>
                        <p className='r101-card-text'>
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
