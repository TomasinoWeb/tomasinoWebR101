import { render } from "nprogress";
import { useState } from "react";
import questions from "../data.json";
import Result from "./quiz/result";

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

  let jsonOfAllDepValues = [
    {
      name: "Creatives",
      score: creativesScore,
      description:
        "Malikhain. Isa kang makatang hindi gumagamit ng mga salita, kundi ng mga kulay. Ikaw ang kukulay sa mga kuwentong magpapaligaya, magpapa-ibig, at magpapaluha sa mga Tomasino. Sabi nga sa kanta ng BGYO, “Nabihag na ng mga kulay. Mundo ko'y bigla na lang nagkakabuhay. Pinapaikot mo ang aking daigdig.”",
      link: "/static/Quiz/Creatives.png",
    },
    {
      name: "Community Development",
      score: communityDevelopmentScore,
      description:
        "Matulungin. Tapat. Malapit ang mga tao sa’yo dahil sa kabutihan mo, kaya malapit mo na rin maging kamukha si Darna. Para sa’yo, wala dapat naiiwan. Kung bumoto ka noong eleksyon, panigurado ang pinili mo ay ang tapat at may malasakit sa mga malalayong komunidad, kahit mahirap pa itong lakbayin.",
      link: "/static/Quiz/ComDev.png",
    },
    {
      name: "External Affairs",
      score: externalAffairsScore,
      description:
        "Napakarami mong kaibigan sa iba’t ibang faculty at college. Malamang kapag naglalakad ka sa campus, may binabati ka lagi minu-minuto. Kapag nasa External Affairs ka, ang magiging almusal mo sa umaga ay hindi “death threats” kundi mga email mula sa iba’t ibang orgs.",
      link: "/static/Quiz/ExternalAffairs.png",
    },
    {
      name: "Finance",
      score: financeScore,
      description:
        "Ikaw ang Zacchaeus ng barkada. Kapag may outing, ikaw ang taga-lista ng babayaran ng bawat isa. Ikaw ang kinakausap ng mga blockmate mo para magpaturo sa math o kaya accounting. Mabusisi ka sa detalye. Kaya pagdating lagi sa usaping pera, ikaw agad ang unang pumapasok sa isipan ng mga tao.",
      link: "/static/Quiz/Finance.png",
    },
    {
      name: "Human Resources",
      score: humanResourcesScore,
      description:
        "Bukas lagi ang pinto ng puso mo para makinig sa mga problema ng iba. Salungat ka sa kasabihang “ghoster” ang Tomasino dahil isang chat lang sa Facebook ay magre-reply ka. Alam mo rin kung gaano kalaki ang potensyal ng isang tao. Ikaw ang magbubuklod sa iba’t ibang sangay ng organisasyon. Ganyan ka kahalaga.",
      link: "/static/Quiz/HumanResources.png",
    },
    {
      name: "Photography",
      score: photographyScore,
      description:
        "Ikaw ang taga-pitik ng katotohanan. Sa mga galaan, lagi kang may dalang camera para kuhaan ng mga larawan ang mga kaibigan mo dahil maaaring hindi na maulit ang eksaktong sandaling iyon. Gusto mong makuha ang mga hindi nakikita ng iba, anumang anggulo pa ito. Nasa kamay mo ang kasaysayan. Dahil ang larawan, hindi nagsisinungaling.",
      link: "/static/Quiz/Photography.png",
    },
    {
      name: "Publicity and Communications",
      score: publicityScore,
      description:
        "Aminin mo: fan ka ng social media manager ng Angkas. Lahat ng trend sa Facebook o Twitter, alam mo. Alam mo rin kung ano ang dapat gawin at (paano tayo hindi ma cacancel sa Twitter). Kapag nandito ka sa sangay na ito, ibig sabihin hangad mong makita ng bawat Tomasino, kahit pa alumni, ang lahat ng kaganapan ng TomasinoWeb.",
      link: "/static/Quiz/PubComm.png",
    },
    {
      name: "Secretariat",
      score: secretariatScore,
      description:
        "Maayos. Organisado. Mabilis magsulat pero maganda pa rin ang kalalabasan. Kung may makakakita man ng notes mo sa klase, maiintindihan agad nila ito. Hindi ka pwedeng lumiban sa mga meeting dahil sa’yo nakasalalay ang minutes. Kapag tinanong ka kung nasaan na ang minutes of the meeting, ang sagot mo ay, “30 minutes po!”",
      link: "/static/Quiz/Secretariat.png",
    },
    {
      name: "Videography",
      score: videographyScore,
      description:
        "Pansin ka agad ng mga tao dahil aligaga kang kumuha ng mga video. Gusto mo kasing maayos at mataas ang kalidad ng mga kuha mo. Ikaw ang magtatagpi ng mga maliliit na sandali sa buhay ng bawat Tomasino upang makabuo ng mga kuwentong hindi malilimutan ng lahat, tulad ng mga kasal at vlogs na napapanood mo sa Youtube.",
      link: "/static/Quiz/Videography.png",
    },
    {
      name: "Web Technologies",
      score: webTechnologiesScore,
      description:
        "Dahil nasa internet tayo, sa’yo nakasalalay ang ayos ng website ng TomasinoWeb. Hindi ka rin mabubuhay kapag nawalan ka ng laptop. Maalam ka sa teknolohiya, at ginagamit mo ito para pahusayin pa ang pamamaraan ng pamamahagi ng mga kuwento sa mga Tomasino. Ready ka na bang magpuyat?",
      link: "/static/Quiz/WebTech.png",
    },
    {
      name: "Writing",
      score: writingScore,
      description:
        "Kung maging isda ang TomasinoWeb, ikaw ang laman—ang pinakadahilan kung bakit tayo naririto. Hindi ka lamang manunulat ng mga salita, mga pangungusap, at mga talata. Sinisiguro mo na ang katotohanan ay dapat laging umiiral. Mahilig ka sa tsismis, pero mas mahilig ka sa pruweba. Siguro ito ang dahilan kung bakit matagal ka nang single.",
      link: "/static/Quiz/Writing.png",
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

  let arrOfMaxName = [];
  let arrOfMaxDesc = [];
  let arrOfMaxLink = [];

  const renderList = jsonOfAllDepValues.map((department) => {
    //Checks if department score is equal to max value
    if (department.score == maxValue) {
      arrOfMaxName.push(department.name);
      arrOfMaxDesc.push(department.description);
      arrOfMaxLink.push(department.link);
    }
  });

  const finalResultIndex = Math.floor(Math.random() * arrOfMaxName.length);
  const finalName = arrOfMaxName[finalResultIndex];
  const finalDesc = arrOfMaxDesc[finalResultIndex];
  const finalLink = arrOfMaxLink[finalResultIndex];

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
      <Result
        finalName={finalName}
        finalDesc={finalDesc}
        finalLink={finalLink}
      />
    );
  }
};

export default Quiz;
