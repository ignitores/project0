import React from 'react'
import './card.css'

const Card = (props) => {
    // console.log(props);
    return (
        <>
            <div className="card">
                <div className="imgContainer">
                    <img
                        className="cardImg"
                        src={props.imgSrc}
                        alt=""
                    />
                </div>
                <div className="lowerContainer">
                    <p className="cardName">{props.name}</p>
                    <p className="cardPrice">{props.price}</p>
                    <p className="cardDescription">{props.description}</p>
                    <div className="reivewAndBtn">
                        <p>{props.rating}</p>
                        <button className="buyBtn">Buy</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card