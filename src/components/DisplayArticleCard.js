import React from "react";

export default function DisplayArticleCard(props) {
    console.log(props)
    return (
        <li key={props.results.created_at}>
        <a href={props.results.url} target="_blank" rel="noopener noreferrer">
          {props.results.title}
        </a>
        <p>
          Points: {props.results.points} | Author: {props.results.author} | Date
          Created: {props.results.created_at}
        </p>
      </li>
)


} 