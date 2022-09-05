import styles from "../styles/Faq.module.css"
import { useEffect, useState } from "react"
import ApplicationGroup from "../components/faqComponents/ApplicationGroup"
import InterviewGroup from "../components/faqComponents/InterviewGroup"
import OrgGroup from "../components/faqComponents/OrgGroup"
import ResultsGroup from "../components/faqComponents/ResultsGroup"
import SussyGroup from "../components/faqComponents/SussyGroup"

const FaqPage = () => {
    const [tag, setTag] = useState("selectTag")
    const [orgShown, setOrgShown] = useState(false)
    const [interviewShown, setInterviewShown] = useState(false)
    const [applicationShown, setApplicationShown] = useState(false)
    const [resultsShown, setResultsShown] = useState(false)
    const [sussyShown, setSussyShown] = useState(false)

    const picked = {
        color: "white",
        backgroundColor: "black",
    }

    const unpicked = {
        color: "black",
        backgroundColor: "white",
    }

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
        <div className={styles["FaqPage"]}>
            <div className={styles["picker-div"]}>
                <div className={styles["title-div"]}>
                    <h1 className={styles["faq-head"]}>
                        Frequently<br></br>Asked<br></br>Questions
                    </h1>
                </div>

                <div className={styles["selection-div"]}>
                    <div className={styles["faq-main-holder"]}>
                        <row className={styles["faq-main-group"]}>
                            <button
                                value='org'
                                className={styles["button-picker"]}
                                onClick={handleOnChange}
                                style={orgShown ? picked : unpicked}>
                                the org
                            </button>

                            <button
                                className={styles["button-picker"]}
                                value='interview'
                                onClick={handleOnChange}
                                style={interviewShown ? picked : unpicked}>
                                interview
                            </button>

                            <div className={styles["faq-main-item"]}>
                                <img
                                    src='/static/Beer.png'
                                    className={styles['faq-icons']}
                                    alt='icon'></img>
                            </div>
                        </row>

                        <row className={styles['faq-main-group']}>
                            <button
                                className={styles['button-picker']}
                                value='application'
                                onClick={handleOnChange}
                                style={applicationShown ? picked : unpicked}>
                                application
                            </button>
                            <div className={styles['faq-main-item']}>
                                <img
                                    src='/static/Burger.png'
                                    className={styles['faq-icons']}
                                    alt='icon'></img>
                            </div>
                            <button
                                className={styles['button-picker']}
                                value='results'
                                onClick={handleOnChange}
                                style={resultsShown ? picked : unpicked}>
                                results
                            </button>
                        </row>

                        <row className={styles['faq-main-group']}>
                            <div className={styles['faq-main-item']}>
                                <img
                                    src='/static/Duck.png'
                                    className={styles['faq-icons']}
                                    alt='icon'></img>
                            </div>
                            <button
                                className={styles['button-picker']}
                                value='sussy'
                                onClick={handleOnChange}
                                style={sussyShown ? picked : unpicked}>
                                thought you`&apos;`d never ask
                            </button>
                        </row>
                    </div>
                </div>
            </div>
            <br />
            <div className={styles['faqs']}>
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
    )
}

export default FaqPage
