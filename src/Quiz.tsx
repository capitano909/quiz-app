/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef } from 'react'
import { useState } from 'react';
import './quiz.css';
import { data } from './data';

function quiz() {
  let [index,setindex]=useState(0);
  let [question,setquestion]=useState(data[index]);
  let [lock,setlouck]=useState(false);
  let [score,setscore]=useState(0);
  let [result,setresult]=useState(false);
  const option1=useRef(null);
  const option2=useRef(null);
  const option3=useRef(null);
  const option4=useRef(null);
  const alloptions=[option1,option2,option3,option4];

  const checkans=(e:any,ans:number)=>{
   if(lock===false){
    if(question.ans===ans){
      e.target.classList.add('correct');
      setlouck(true)
      setscore(prev=>prev+1)
    }
    else{
      e.target.classList.add('worng');
      setlouck(true)
    }
    }
  }
  const next=()=>{
    if(lock===true){
      if (index===(data.length-1)){
        setresult(true)
      }
    setindex(++index);
    setquestion(data[index]);
    setlouck(false); 
    alloptions.map((option:any)=>{
    option.current.classList.remove('worng');
    option.current.classList.remove('correct');
    return null
    }
  )
    
  }
  }
  const reset=()=>{
    setindex(0);
    setquestion(data[0]);
    setscore(0);
    setresult(false);
  }
  
  

  return (
    <div className='container '>
        <h1>Quiz App</h1>
        <hr/>
        {result?<></>:<>
        <h2>{index+1}.{question.Question}</h2>
        <ul>
            <li ref={option1} onClick={(e)=>{checkans(e,1)}}>{question.option1}</li>
            <li  ref ={option2} onClick={(e)=>{checkans(e,2)}}>{question.option2}</li>
            <li ref={option3} onClick={(e)=>{checkans(e,3)}}>{question.option3}</li>
            <li ref={option4} onClick={(e)=>{checkans(e,4)}}>{question.option4}</li>
        </ul>
        <button onClick={next}>Next</button>
        <div>{index+1} of {data.length} </div>
        </>}
        
        
        {result?<><h2>Your score is {score}</h2>
        <button onClick={reset}>Reset</button></>:<></>}
        
       

    </div>
  )
}

export default quiz
