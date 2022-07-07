import React from 'react'
import './home.css'
import { useState, useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import CardSection from '../../components/cardsection/CardSection'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Category from '../../components/category/Category';
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/Slider/Slider';
import { axiosInstance } from '../../config'
import axios from 'axios'
import { ThreeDots } from 'react-loader-spinner'
import { FaArrowCircleUp } from "react-icons/fa";

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);
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

    const scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    }, [])

    const listenToScroll = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    if (value.allCakes?.length === undefined) {
        const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
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
                <Slider/>
                <Category />
                {
                    isVisible
                    &&
                    <FaArrowCircleUp className="scrollTop" id="scrollTop" onClick={scrollToTop} />
                }
                <CardSection title="Popular Cakes" dat={value.cakeByOrder.slice(0, 4)} />
                <CardSection title="Most Reviewed" dat={value.cakeByReviews.slice(0, 4)} />
                <CardSection title="All Cakes" dat={value.allCakes} />
                <Footer />

            </>
        )
    }
}

export default Home