import React from "react";

const Recipes = (props)=>{
    return(
        <div className="item">
            <h1>{props.title}</h1>
            <p> Luong calo : {props.calo}</p>
            <img src={props.img}alt="" />
            <div className="recipe">
                {props.ingre.map(item =>(
                   <li>{item.text}</li>
                ))}
            </div>
        </div>
    )
}

export default Recipes;