import { render } from "nprogress"
import { useState } from "react"
import questions from "../../data.json"
import styles from "../../styles/Question.module.css"
import Header from "../../components/TransparentHeader"

const Question = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [creativesScore, setCreativesScore] = useState(0)
    const [communityDevelopmentScore, setCommunityDevelopmentScore] =
        useState(0)
    const [externalAffairsScore, setExternalAffairsScore] = useState(0)
    const [financeScore, setFinanceScore] = useState(0)
    const [humanResourcesScore, setHumanResourcesScore] = useState(0)
    const [photographyScore, setPhotographyScore] = useState(0)
    const [publicityScore, setPublicityScore] = useState(0)
    const [secretariatScore, setSecretariatScore] = useState(0)
    const [videographyScore, setVideographyScore] = useState(0)
    const [webTechnologiesScore, setWebTechnologiesScore] = useState(0)
    const [writingScore, setWritingScore] = useState(0)
    const [result, setResult] = useState("")
    const [progressBarMultiplier, setProgressBarMultiplier] = useState(1)

    let jsonOfAllDepValues = [
        {
            name: "Creatives",
            score: creativesScore,
        },
        {
            name: "Community Development",
            score: communityDevelopmentScore,
        },
        {
            name: "External Affairs",
            score: externalAffairsScore,
        },
        {
            name: "Finance",
            score: financeScore,
        },
        {
            name: "Human Resources",
            score: humanResourcesScore,
        },
        {
            name: "Photography",
            score: photographyScore,
        },
        {
            name: "Publicity",
            score: publicityScore,
        },
        {
            name: "Secretariat",
            score: secretariatScore,
        },
        {
            name: "Videography",
            score: videographyScore,
        },
        {
            name: "Web Technologies",
            score: webTechnologiesScore,
        },
        {
            name: "Writing",
            score: writingScore,
        },
    ]

    function highestCounter(jsonOfAllDepValues) {
        var maxValue = Number.MIN_VALUE

        for (var i = 0; i < jsonOfAllDepValues.length; i++) {
            if (jsonOfAllDepValues[i].score > maxValue) {
                maxValue = jsonOfAllDepValues[i].score
            }
        }
        return maxValue
    }

    function handleCheckAnswer(department) {
        if (department.includes("creatives")) {
            setCreativesScore(creativesScore + 1)
        }
        if (department.includes("communityDevelopment")) {
            setCommunityDevelopmentScore(communityDevelopmentScore + 1)
        }
        if (department.includes("externalAffairs")) {
            setExternalAffairsScore(externalAffairsScore + 1)
        }
        if (department.includes("finance")) {
            setFinanceScore(financeScore + 1)
        }
        if (department.includes("humanResources")) {
            setHumanResourcesScore(humanResourcesScore + 1)
        }
        if (department.includes("photography")) {
            setPhotographyScore(photographyScore + 1)
        }
        if (department.includes("publicty")) {
            setPublicityScore(publicityScore + 1)
        }
        if (department.includes("secretariat")) {
            setSecretariatScore(secretariatScore + 1)
        }
        if (department.includes("videography")) {
            setVideographyScore(videographyScore + 1)
        }
        if (department.includes("webTechnologies")) {
            setWebTechnologiesScore(webTechnologiesScore + 1)
        }
        if (department.includes("writing")) {
            setWritingScore(writingScore + 1)
        }

        setCurrentQuestion(currentQuestion + 1)

        setProgressBarMultiplier(progressBarMultiplier + 1)
    }

    var maxValue = highestCounter(jsonOfAllDepValues)

    let arrOfMaxValues = []

    const renderList = jsonOfAllDepValues.map((department) => {
        //Checks if department score is equal to max value
        if (department.score == maxValue) {
            arrOfMaxValues.push(department.name)
        }
    })

    const finalResultIndex = Math.floor(Math.random() * arrOfMaxValues.length)
    const finalResult = arrOfMaxValues[finalResultIndex]


    if (currentQuestion < questions.length) {
        return (
          <>
            <Header />
            <div className={styles.question}>
                <div className={styles.container}>
                    <div className={styles.progressContainer}>
                      <div className={styles.progressBar} style={{width: `calc(100% / 11 * ${progressBarMultiplier})`}}>&nbsp;</div>
                    </div>
                    <h1>{questions[currentQuestion].questionText}</h1>
                    <div className={styles.questionContainer}>
                        {questions[currentQuestion].answerOptions.map(
                            (answerOption, index) => (
                                <button className={styles.questionBtn}
                                    key={index}
                                    onClick={() => {
                                        handleCheckAnswer(
                                            answerOption.department
                                        )
                                    }}>
                                    {answerOption.answerText}
                                </button>
                            )
                        )}
                    </div>
                </div>
            </div>
          </>
        )
    } else {
        return (
            // components for each result goes here
            <div>
                <h1>hello world</h1>
                {/* outputs the max value for checking */}
                <h2>{maxValue}</h2>

                {/* renders the list with highest values */}
                <h2>{finalResult}</h2>
                <div></div>
            </div>
        )
    }
}

export default Question
