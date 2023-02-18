import React from 'react'
import ReactStars from 'react-stars'
import './card.css'
import { useNavigate } from 'react-router-dom'


const Card = (props) => {
    // console.log(props);
    const ratingChanged = (newRating) => {
        // console.log(newRating)
    }
    const navigate = useNavigate()
    return (
        <>
            <div className="cake_card" onClick={() => navigate('/details/' + props.id)}>
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
                    <p className="cardDescription">{props.description.toString().substring(0, 30) + '....'}</p>
                    <div className="reivewAndBtn">
                        <p>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                color2={'#ffd700'}
                                value={props.rating}
                                edit={false}
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