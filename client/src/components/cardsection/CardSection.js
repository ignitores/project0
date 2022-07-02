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
                            rating="⭐⭐⭐⭐⭐"
                        />
                    ))}
                    {/* <Card
                        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW-E7EKb761c3GaDnMxzbMoF5BOWuhdBsvIw&usqp=CAU"
                        name={values.name}
                        price="₹ 657"
                        description="This is a Strawberry Cake"
                        rating="⭐⭐⭐⭐⭐"
                    />
                    <Card
                        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBNlEz6_7Fhlcnj2qriu9-uVblmzv-H29__Q&usqp=CAU"
                        name={values.name}
                        price="₹ 592"
                        description="This is a Butter Scotch Cake"
                        rating="⭐⭐⭐⭐⭐"
                    />
                    <Card
                        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzMswChuGbb_HxaabvuSOuA0ylA3BQFKmU5w&usqp=CAU"
                        name={values.name}
                        price="₹ 549"
                        description="This is a Pineapple Cake"
                        rating="⭐⭐⭐⭐⭐"
                    /> */}

                </div>
            </div>

        </>
    )
}
export default CardSection