import React, { useState } from "react";
import Optioncard from "./Optioncard";
export default function Quizscreen(props) {
  const newArray = [...props.quiz.incorrect_answers, props.quiz.correct_answer];
  const [choiceQues, setchoiceQues] = React.useState(newArray);
  const [colorState, setcolorState] = React.useState(false);
  const [correctAnswer, setcorrectAnswer] = React.useState(props.quiz.correct_answer);
 
   
 
   
  const optionElements = choiceQues.map((option) => {
    return (
      <Optioncard
        key={Math.random() * 100}
        correctAnswer={correctAnswer}
        option={option}
        colorState={colorState}
        answerCount={props.answerCount}
        setanswerCount={props.setanswerCount}
        showAnswer={props.showAnswer}
      />
    );
  });

  
  return (
    <div className="quiz-board">
      <h5>{props.quiz.question}</h5>
      <div className="option-card">{optionElements}</div>
      
    </div>
  );
}
