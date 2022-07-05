import React from 'react'
import './cardsection.css'

import Card from '../card/Card'

const CardSection = (props) => {
    return (
        <>
            <div className="card_section">
                <h1 className="section_title">{props.title}</h1>
                <div className="cards_div">
                    {props.dat.map(values => (

                        <Card
                            key={values._id}
                            imgSrc={values.images[0]}
                            name={values.name}
                            price={Object.values(values.sizeAndPrice)[0]}
                            description={Object.values(values.description)}
                            rating={values.sumOfReviews / values.totalNoOfReviews}
                        />
                    ))}

                </div>
            </div>

        </>
    )
}
export default CardSection