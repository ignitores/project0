import React from 'react'
import './home.css'
import { useState, useEffect } from 'react'
import  Navbar from '../../components/navbar/Navbar'

import CardSection from '../../components/cardsection/CardSection'
const Home = () => {
    const [value, setValue] = useState([])

    useEffect(() => {
        const cleanup = fetch("/cake/allcakes")
            .then(res => res.json())
            .then(value => setValue(value))
        return () => cleanup;
    }, []);

    if (value.length === 0) {
        return (
            <div>
                <h1>Loading</h1>
            </div>
        )
    }
    else {
        return (
          
            <>
                <Navbar/>
                <CardSection title="Popular Cakes" dat={value} />

            </>
        )
    }
}

export default Home