import React from 'react'
import './home.css'
import { useState, useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import CardSection from '../../components/cardsection/CardSection'

import { axiosInstance } from '../../config'
import axios from 'axios'

const Home = () => {
    const [value, setValue] = useState(
        {
            allCakes: null,
            cakesByOrder: null,
            cakeByReviews: null
        }
    );

    const fetchData = () => {
        const req1 = axiosInstance.get("/cake/allcakes");
        const req2 = axiosInstance.get("/cake/cakeByOrder");
        const req3 = axiosInstance.get("/cake/mostReviewed");

        axios.all([req1, req2, req3]).then(
            axios.spread((...response) => {
                const allCakeData = response[0].data
                const cakeByOrderData = response[1].data
                const cakeByReviewData = response[2].data

                // set data of cakes
                setValue(
                    {
                        allCakes: allCakeData,
                        cakeByOrder: cakeByOrderData,
                        cakeByReviews: cakeByReviewData
                    }
                );
            })
        )
    }

    useEffect(() => {
        fetchData()
    }, [])
    // console.log(value); 


    if (value.allCakes?.length === undefined) {
        return (
            <div>
                <h1>Loading</h1>
            </div>
        )
    }
    else {
        return (

            <>
                <Navbar />
                <CardSection title="All Cakes" dat={value.allCakes} />

            </>
        )
    }
}

export default Home