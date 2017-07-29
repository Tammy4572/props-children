import React, { Component } from 'react'
import * as data from './data';


const QuestionList = (props) => {
return (
     <ul>
          {data.default.map(item => {
          return ( <li key="question.id"><button>{item.answer}</button></li>)
          })}
     </ul>
)
}

export default QuestionList;
