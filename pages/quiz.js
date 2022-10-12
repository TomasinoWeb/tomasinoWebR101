import { useState } from "react";
import questions from "../data.json";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [creativesScore, setCreativesScore] = useState(0);
  const [communityDevelopmentScore, setCommunityDevelopmentScore] = useState(0);
  const [externalAffairsScore, setExternalAffairsScore] = useState(0);
  const [financeScore, setFinanceScore] = useState(0);
  const [humanResourcesScore, setHumanResourcesScore] = useState(0);
  const [photographyScore, setPhotographyScore] = useState(0);
  const [publicityScore, setPublicityScore] = useState(0);
  const [secretariatScore, setSecretariatScore] = useState(0);
  const [videographyScore, setVideographyScore] = useState(0);
  const [webTechnologiesScore, setWebTechnologiesScore] = useState(0);
  const [writingScore, setWritingScore] = useState(0);
  const [result, setResult] = useState("");

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
  ];

  //   let hashOfAllDepValues = [
  //     [
  //       ["Creatives", creativesScore],
  //       ["Community Development", communityDevelopmentScore],
  //       ["External Affairs", externalAffairsScore],
  //       ["Finance", financeScore],
  //       ["Human Resources", humanResourcesScore],
  //       ["Photography", photographyScore],
  //       ["Publicity", publicityScore],
  //       ["Secretariat", secretariatScore],
  //       ["Videography", videographyScore],
  //       ["Web Technologies", webTechnologiesScore],
  //       ["Writing", writingScore],
  //     ],
  //   ];

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
  ];

  function highestCounter(jsonOfAllDepValues) {
    var maxValue = Number.MIN_VALUE;

    for (var i = 0; i < jsonOfAllDepValues.length; i++) {
      if (jsonOfAllDepValues[i].score > maxValue) {
        maxValue = jsonOfAllDepValues[i].score;
      }
    }
    return maxValue;
  }

  function handleCheckAnswer(department) {
    if (department.includes("creatives")) {
      setCreativesScore(creativesScore + 1);
    }
    if (department.includes("communityDevelopment")) {
      setCommunityDevelopmentScore(communityDevelopmentScore + 1);
    }
    if (department.includes("externalAffairs")) {
      setExternalAffairsScore(externalAffairsScore + 1);
    }
    if (department.includes("finance")) {
      setFinanceScore(financeScore + 1);
    }
    if (department.includes("humanResources")) {
      setHumanResourcesScore(humanResourcesScore + 1);
    }
    if (department.includes("photography")) {
      setPhotographyScore(photographyScore + 1);
    }
    if (department.includes("publicty")) {
      setPublicityScore(publicityScore + 1);
    }
    if (department.includes("secretariat")) {
      setSecretariatScore(secretariatScore + 1);
    }
    if (department.includes("videography")) {
      setVideographyScore(videographyScore + 1);
    }
    if (department.includes("webTechnologies")) {
      setWebTechnologiesScore(webTechnologiesScore + 1);
    }
    if (department.includes("writing")) {
      setWritingScore(writingScore + 1);
    }

    setCurrentQuestion(currentQuestion + 1);
  }

  var maxValue = highestCounter(jsonOfAllDepValues);

  const renderList = jsonOfAllDepValues.map((department) => {
    //Checks if department score is equal to max value
    if (department.score == maxValue) {
      return (
        <ul type="disc">
          <li>{department.name}</li>
        </ul>
      );
    }
  });

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
                  handleCheckAnswer(answerOption.department);
                }}
              >
                {answerOption.answerText}
              </button>
            )
          )}
        </div>
      </div>
    );
  } else {
    return (
      // components for each result goes here
      <div>
        <h1>hello world</h1>
        {/* outputs the max value for checking */}
        <h2>{maxValue}</h2>

        {/* renders the list with highest values */}
        <h2>{renderList}</h2>
        <div></div>
      </div>
    );
  }
};

export default Quiz;
