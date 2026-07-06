import react from "react";

const Card = (props) => {
    return (

        <div className="card">
            <img src={props.link} alt={props.name} />
            <div className="card-body text-center">
                <h2>{props.name}</h2>
                <p>{props.texto}</p>
            </div>
            <div className="card-footer">
                <button className="btn btn-primary">{props.bton}</button>
            </div>
        </div>
    )
}
export { Card };