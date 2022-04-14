import React, { useState } from "react";
import Startscreen from "./Startscreen";
import Quizscreen from "./Quizscreen";
import reportWebVitals from "./reportWebVitals";
import Optioncard from "./Optioncard";
export default function App() {
  const [state, setState] = useState(false);
  const [initState, setinitState] = useState(true);
  const [quizData, setquizData] = useState([]);
  const [score, setScore] = useState(false);
  const [buttonState, setbuttonState] = useState(false);
  const [answerCount, setanswerCount] = React.useState(0);
  React.useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => setquizData(data.results));
  }, []);

  function startQuiz() {
    setinitState(!initState);
    setState(!state);
    setbuttonState(!buttonState)
  }

  const quizElements = quizData.map((quiz) => {
    return (
      <Quizscreen
        quiz={quiz}
        setanswerCount={setanswerCount}
        answerCount={answerCount}
        score={score}
        showAnswer={showAnswer}
         />
         
      
    );
  });
  let totalCount=0
  const buttonLabel = score ? "Play Again" : "CheckAnswer";
  function showAnswer(ans)
  {
      setanswerCount(ans=>ans+1)
      return
      
      
  }
  return (
    <div className="container">
      {initState && <Startscreen handleClick={startQuiz} />}
      {state && quizElements}
       { buttonState &&
        <button
          className="check-answers"
          onClick={() => {
            setScore(!score);
            alert("You scored" + answerCount + " / 5")
          }}
        >
          {buttonLabel}
        </button>
        } 

    </div>
  );
}
