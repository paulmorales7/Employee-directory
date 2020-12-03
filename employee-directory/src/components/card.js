import React from "react";

function Card(props) {

    return (
        <div>
            {props.results.map(props =>
                <div>
                    <img src={props.image} />
                    <h1>{props.name}</h1>
                    <p>{props.email}</p>
                    <p>{props.phone}</p>
                </div>
            )}
        </div>

    )
}

export default Card;