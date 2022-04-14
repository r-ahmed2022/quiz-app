import React from "react"
 
 
export default function Startscreen(props)
{
   
     
    
    return (
        <div className="start_screen">
        <h1 className="title-text">Quizzical</h1>
        <p className="description">Test your Knowledge</p>
         <button className="start-button" onClick={props.handleClick}>Start Quiz</button>
        </div>
        
        
    )
}