import "./faqPage.css"
import { useEffect, useState } from "react"


import ApplicationGroup from "../../components/faqComponents/ApplicationGroup"
import InterviewGroup from "../../components/faqComponents/InterviewGroup"
import OrgGroup from "../../components/faqComponents/OrgGroup"
import ResultsGroup from "../../components/faqComponents/ResultsGroup"
import SussyGroup from "../../components/faqComponents/SussyGroup"

import Beer from "../../assets/Beer.png"
import Burger from "../../assets/Burger.png"
import Duck from "../../assets/Duck.png"

const FaqPage = () => {

    const [tag, setTag] = useState("selectTag")

    const [orgShown, setOrgShown] = useState(false)
    const [interviewShown, setInterviewShown] = useState(false)
    const [applicationShown, setApplicationShown] = useState(false)
    const [resultsShown, setResultsShown] = useState(false)
    const [sussyShown, setSussyShown] = useState(false)

    useEffect(() => {
        tag === "org" ? setOrgShown(true) : setOrgShown(false)
        tag === "interview" ? setInterviewShown(true) : setInterviewShown(false)
        tag === "application"
            ? setApplicationShown(true)
            : setApplicationShown(false)
        tag === "results" ? setResultsShown(true) : setResultsShown(false)
        tag === "sussy" ? setSussyShown(true) : setSussyShown(false)
    }, [tag])

    const handleOnChange = (e) => {
        setTag(e.target.value)
    }

    return (
      <div className="FaqPage">
        <div className="picker-div">
          <div className="title-div">
            <h1 className="faq-head">
              Frequently<br></br>Asked<br></br>Questions
            </h1>
          </div>

          <div className="selection-div">
            <table class="faq-main-holder">
              <tr class="faq-main-group">
                <td>
                  <button
                    value="org"
                    className="button-picker"
                    onClick={handleOnChange}
                    style={
                      orgShown
                        ? {
                            color: "white",
                            backgroundColor: "black",
                          }
                        : {
                            color: "black",
                            backgroundColor: "white",
                          }
                    }
                  >
                    the org
                  </button>
                </td>
                <td>
                  <button
                    className="button-picker"
                    value="interview"
                    onClick={handleOnChange}
                    style={
                      interviewShown
                        ? {
                            color: "white",
                            backgroundColor: "black",
                          }
                        : {
                            color: "black",
                            backgroundColor: "white",
                          }
                    }
                  >
                    interview
                  </button>
                </td>
                <td>
                  <div class="faq-main-item">
                    <img src={Beer} class="faq-icons" alt="icon"></img>
                  </div>
                </td>
              </tr>

              <tr class="faq-main-group">
                <td>
                  <button
                    className="button-picker"
                    value="application"
                    onClick={handleOnChange}
                    style={
                      applicationShown
                        ? {
                            color: "white",
                            backgroundColor: "black",
                          }
                        : {
                            color: "black",
                            backgroundColor: "white",
                          }
                    }
                  >
                    application
                  </button>
                </td>
                <td>
                  <div class="faq-main-item">
                    <img src={Burger} class="faq-icons" alt="icon"></img>
                  </div>
                </td>
                <td>
                  <button
                    className="button-picker"
                    value="results"
                    onClick={handleOnChange}
                    style={
                      resultsShown
                        ? {
                            color: "white",
                            backgroundColor: "black",
                          }
                        : {
                            color: "black",
                            backgroundColor: "white",
                          }
                    }
                  >
                    results
                  </button>
                </td>
              </tr>

              <tr class="faq-main-group">
                <td>
                  <div class="faq-main-item">
                    <img src={Duck} class="faq-icons" alt="icon"></img>
                  </div>
                </td>
                <td>
                  <button
                    className="button-picker"
                    value="sussy"
                    onClick={handleOnChange}
                    style={
                      sussyShown
                        ? {
                            color: "white",
                            backgroundColor: "black",
                          }
                        : {
                            color: "black",
                            backgroundColor: "white",
                          }
                    }
                  >
                    thought you'd never ask
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <br />
        <div className="faqs">
          <pre>
            {/* if x is true, display x group, else dont */}
            {orgShown && <OrgGroup />}
            {interviewShown && <InterviewGroup />}
            {applicationShown && <ApplicationGroup />}
            {resultsShown && <ResultsGroup />}
            {sussyShown && <SussyGroup />}
          </pre>
        </div>
      </div>
    );
}

export default FaqPage
