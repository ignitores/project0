import React from 'react'
import ReactStars from 'react-stars'
import './card.css'

const Card = (props) => {
    // console.log(props);
    const ratingChanged = (newRating) => {
        // console.log(newRating)
    }

    return (
        <>
            <div className="cake_card">
                <div className="imgContainer">
                    <img
                        className="cardImg"
                        src={props.imgSrc}
                        alt=""
                    />
                </div>
                <div className="lowerContainer">
                    <p className="cardName">{props.name}</p>
                    <p className="cardPrice">{`₹ ${props.price}`}</p>
                    <p className="cardDescription">{props.description}</p>
                    <div className="reivewAndBtn">
                        <p>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                color2={'#ffd700'}
                                value={props.rating}
                                half={true} />

                        </p>
                        <button className="buyBtn">Buy</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card