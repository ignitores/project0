import React from 'react'
import './cardsection.css'

import Card from '../card/Card'

const CardSection = (props) => {
    return (
        <>
            <div className="card_section">
                <h1 className="section_title">{props.title}</h1>
                <div className="cards_div">

                    <Card
                        imgSrc="https://www.flowersnfruits.com/saiflora130100/uploads/product-pics/1632740624_806.jpg"
                        name="Special Black Forest"
                        price="₹ 548"
                        description="This is a Black Forest Cake"
                        rating="⭐⭐⭐⭐⭐"
                    />
                    <Card
                        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW-E7EKb761c3GaDnMxzbMoF5BOWuhdBsvIw&usqp=CAU"
                        name="Strawberry Cake"
                        price="₹ 657"
                        description="This is a Strawberry Cake"
                        rating="⭐⭐⭐⭐⭐"
                    />
                    <Card
                        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBNlEz6_7Fhlcnj2qriu9-uVblmzv-H29__Q&usqp=CAU"
                        name="Butter Scotch Cake"
                        price="₹ 592"
                        description="This is a Butter Scotch Cake"
                        rating="⭐⭐⭐⭐⭐"
                    />
                    <Card
                        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzMswChuGbb_HxaabvuSOuA0ylA3BQFKmU5w&usqp=CAU"
                        name="Pineapple Cake"
                        price="₹ 549"
                        description="This is a Pineapple Cake"
                        rating="⭐⭐⭐⭐⭐"
                    />

                </div>
            </div>
        </>
    )
}
export default CardSection