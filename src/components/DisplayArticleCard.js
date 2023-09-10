import React from "react";

export default function DisplayArticleCard(props) {
  return (
    <li>
      <a href={props.results.url} target="_blank" rel="noopener noreferrer">
        {props.results.title}
      </a>
      <span> </span>
      <a
        className="grey"
        href={props.results.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        ({props.results.url})
      </a>
      <p className="grey">
        Points: {props.results.points} | Author: {props.results.author} | Date
        Created: {props.results.created_at}
      </p>
    </li>
  );
}
