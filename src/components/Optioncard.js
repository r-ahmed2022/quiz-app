import React from "react";

export default function Optioncard(props) {
  const [on, setOn] = React.useState(props.colorState);
  const [scoreCount, setscoreCount] = React.useState(props.answerCount);
  console.log(props.answerCount)
  const styles = {
    backgroundColor: on ? "#D6DBF5" : "transparent",
  };

  function selectAnswer(event) {
    setOn((prevOn) => !prevOn)
   if (event.target.innerText == props.correctAnswer)
      setscoreCount(prevCount =>{
        props.showAnswer(prevCount + 1)
      })
      
      
  }

  return (
    <div
      style={styles}
      className="options"
      onClick={(event) => selectAnswer(event)}
    >
      <p>{props.option}</p>
    </div>
  );
}
