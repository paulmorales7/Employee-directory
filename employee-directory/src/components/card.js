import React from "react";

function Card(props) {
    return (
        <div>
            <img src={props.image} />
            <h1>{props.name}</h1>
            <p>{props.email}</p>
            <p>{props.phone}</p>
        </div>
    )
}

export default Card;