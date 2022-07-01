import React from 'react'
import './home.css'

import CardSection from '../../components/cardsection/CardSection'

const Home = () => {
    return (
        <>
            <CardSection title="Popular Cakes" />
            <CardSection title="Trending Cakes" />
            <CardSection title="Birthday Cakes" />

        </>
    )
}

export default Home