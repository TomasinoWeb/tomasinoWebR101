import "./r101.css"
import form from "../../assets/form.png"
import arrow from "../../assets/arrow.png"
import exam from "../../assets/exam.png"
import interview from "../../assets/interview.png"
import result from "../../assets/result.png"

const R101 = () => {
    return (
        <div className='r101'>
            <p className='appProcess'>
                The <br /> Application
                <br /> Process
            </p>
            <div>
                <img src={form} className='divider-custom-form' alt='...' />

                <img src={arrow} className='divider-custom-arrow' alt='...' />

                <img src={exam} className='divider-custom-icons' alt='...' />

                <img src={arrow} className='divider-custom-arrow' alt='...' />

                <img
                    src={interview}
                    className='divider-custom-icons'
                    alt='...'
                />

                <img src={arrow} className='divider-custom-arrow' alt='...' />

                <img src={result} className='divider-custom-icons' alt='...' />
            </div>

            <div className='row'>
                <div className='column'>
                    <div className='card'>
                        <h3 className='font-Head-paragraph'>
                            Formal application
                        </h3>
                        <p className='custom-paragraph'>
                            Fill out the application form <br />
                            found at the website
                        </p>
                    </div>
                </div>
            </div>

            <div class='column'>
                <div class='card' style={{ marginLeft: "6%" }}>
                    <h3 class='font-Head-paragraph'>Take the exam</h3>
                    <p class='custom-paragraph'>
                        The department <br />
                        examination will be sent by <br />
                        our Human Resources
                        <br />
                        department. Skip this step if <br />
                        your department does not have an exam.
                    </p>
                </div>
            </div>

            <div className='column'>
                <div className='card' style={{ marginLeft: "6%" }}>
                    <h3 className='font-Head-paragraph'>Interview</h3>
                    <p className='custom-paragraph'>
                        After passing your
                        <br />
                        requirements,the Human <br />
                        Resources department will
                        <br />
                        send you a scheduling sheet
                        <br />
                        for the interview.
                    </p>
                </div>
            </div>

            <div className="column">
            <div className="card" style={{marginLeft: "6%"}}>
              <h3 className="font-Head-paragraph">Results</h3>
              <p className="custom-paragraph">
                The results will be sent to <br /> 
                you in less than a week by<br /> 
                our Human Resources department.
  
              </p>
            </div>
          </div> 

        </div>
    )
}

export default R101
