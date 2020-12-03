import React from "react";
import "./card.css";

function Card(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img src={props.employee.picture.thumbnail} alt="employee" />
            </div>
            <div className="content">
                <h1 className="name">{`${props.employee.name.first} ${props.employee.name.last}`}</h1>
                <p>Email: {props.employee.email}</p>
                <p>Phone: {props.employee.phone}</p>
            </div>
        </div>
    )
}
export default Card;
