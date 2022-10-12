import {useState} from 'react'
import questions from '../data.json'

const Quiz = () => { 
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

    let arrOfAllDepValues = [
        creativesScore,
        communityDevelopmentScore,
        externalAffairsScore,
        financeScore,
        humanResourcesScore,
        photographyScore,
        publicityScore,
        secretariatScore,
        videographyScore,
        webTechnologiesScore,
        writingScore,
    ]

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

        setCurrentQuestion(currentQuestion + 1);
    }

    if (currentQuestion < questions.length) {
        return (
            <div>
                <div>
                    <h1>{questions[currentQuestion].questionText}</h1>
                </div>
                <div>
                    {questions[currentQuestion].answerOptions.map(
                        (answerOption, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    handleCheckAnswer(answerOption.department)
                                }}>
                                {answerOption.answerText}
                            </button>
                        )
                    )}
                </div>
            </div>
        )
    } else {
        return (
            // components for each result goes here
            <div>
                <h1>hello world</h1>
            </div>
        )
    }
}

export default Quiz;