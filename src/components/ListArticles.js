import { useEffect, useState } from "react";
import DisplayArticleCard from "./DisplayArticleCard";

export default function ListArticles(props) {
  return props.data.map((post, index) => {
    // console.log(props.data[index].objectID)
    return <DisplayArticleCard key={props.data[index].objectID} results={props.data[index]} />;
  });
}
