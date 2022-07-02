import React from 'react'
import './home.css'
import { useState, useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import CardSection from '../../components/cardsection/CardSection'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


import { axiosInstance } from '../../config'
import axios from 'axios'
import { ThreeDots } from 'react-loader-spinner'

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
        const style={ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
        return (
            <div style={style}>
                <ThreeDots color="#00BFFF" height={80} width={80} />
            </div>
        )
    }
    else {
        return (

            <>
                <Navbar />
                <CardSection title="Popular Cakes" dat={value.cakeByOrder.slice(0, 4)} />
                <CardSection title="Most Reviewed" dat={value.cakeByReviews.slice(0, 4)} />
                <CardSection title="All Cakes" dat={value.allCakes} />

            </>
        )
    }
}

export default Home