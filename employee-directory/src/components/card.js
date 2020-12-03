import React from "react";


function Card(props) {
    return (
        <div>
            <img src={props.employee.picture.thumbnail} alt="employee" />
            <h1>{`${props.employee.name.first}${props.employee.name.last}`}</h1>
            <p>{props.employee.email}</p>
            <p>{props.employee.phone}</p>
        </div>
    )
}
export default Card;
