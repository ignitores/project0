import React from 'react'
import FlavourCard from '../flavourCard/FlavourCard'
import './flavour.css'

const Flavour = (props) => {

    return (
        <>
            <div className="flavour_container">
                <h1 className='flavour_title'>Cake By Flavours</h1>
                <main className="page-content">

                    <FlavourCard
                        flavour="Chocolate"
                        description="Check out the cakes for the Birthday eve and make it memorable"
                        bgImg="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600"

                    />

                    <FlavourCard
                        flavour="Vanilla"
                        description="It's the day always dreamed of ,make it more special with this cake flavour"
                        bgImg="https://images.unsplash.com/photo-1503525642560-ecca5e2e49e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHZhbmlsbGElMjBjYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    />

                    <FlavourCard
                        flavour="blackforest"
                        description="Why to make the ocassion incomplete, spread the sweetenes with the cakeness."
                        bgImg="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBmb3Jlc3QlMjBjYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

                    />

                    <FlavourCard
                        flavour="mango"
                        description="Plan your cake in your own design with these fabulous way"
                        bgImg="https://images.pexels.com/photos/9419867/pexels-photo-9419867.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />

                </main>

            </div>
        </>
    )
}

export default Flavour