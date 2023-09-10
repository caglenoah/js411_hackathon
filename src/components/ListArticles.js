import { useEffect, useState } from "react";
import DisplayArticleCard from "./DisplayArticleCard";


export default function ListArticles(props) {

    return (
        props.data.map((post, index) => {
            return (
                <DisplayArticleCard results={props.data[index]} />


            )


        })


    )
   
}