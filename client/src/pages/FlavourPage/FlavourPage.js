import React, { useState, useEffect } from 'react'
import './flavourPage.css'
import CardSection from '../../components/cardsection/CardSection'
import { useParams } from 'react-router'
import { axiosInstance } from '../../config';
import Navbar from '../../components/navbar/Navbar';
import axios from 'axios'

const FlavourPage = () => {
    const [cake, setCake] = useState([])
    const flavour = useParams().flavour;
    // console.log(flavour);

    const [value, setValue] = useState(
        {
            cakes_low_to_high: null,
            cakes_high_to_low: null,
            cakes_sort_by_orders: null,
        }
    );

    const fetchData = () => {
        const req1 = axiosInstance.get(`/cake/cakesByFlavourSortedByPrice/${flavour}`);
        const req2 = axiosInstance.get(`/cake/cakesByFlavourSortedByPriceDesc/${flavour}`);
        const req3 = axiosInstance.get(`/cake/cakesByFlavoursSortByOrders/${flavour}`);

        axios.all([req1, req2, req3]).then(
            axios.spread((...response) => {
                const cakesLowToHigh = response[0].data
                const cakesHighToLow = response[1].data
                const cakesSortByOrders = response[2].data


                // set data of cakes
                setValue(
                    {
                        cakes_low_to_high: cakesLowToHigh,
                        cakes_high_to_low: cakesHighToLow,
                        cakes_sort_by_orders: cakesSortByOrders,

                    }
                );
            })
        )
    }

    // useEffect(() => {

    // }, [])
    // console.log(value);



    const fetchAllCakes = async () => {
        try {
            const res = await axiosInstance.get(`cake/cakesByFlavour/${flavour}`)
            setCake(res.data);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchAllCakes();
        fetchData()
    }, [])
    // console.log(cake);

    const handleSortCakes = () => {
        let filterValue = document.getElementById('filter_cake_flavour').value;

        if (filterValue == "low_to_high") {
            setCake(value.cakes_low_to_high);
        }
        else if (filterValue == "high_to_low") {
            setCake(value.cakes_high_to_low);
        }
        else if (filterValue == "review") {
            setCake(value.cakes_sort_by_orders);
        }
    }
    return (
        <>
            <Navbar />
            {
                (cake.length === 0) ?
                    (
                        <h1>No cake found</h1>) :
                    (
                        <div className="categoryPage_container">
                            <div className="sort_selection_container">

                                <span for="cars" className='sort_label'>Sort Cakes By:</span>

                                <select name="cars" id="filter_cake_flavour" className='selection_container' onClick={handleSortCakes}>
                                    <option value="">Apply Filter</option>
                                    <option value="low_to_high">Price: Low to High</option>
                                    <option value="high_to_low">Price: High to Low</option>
                                    <option value="review">Review</option>

                                </select>

                            </div>
                            <CardSection title={`${flavour} cakes`} dat={cake} />
                        </div>
                    )
            }
        </>
    )
}

export default FlavourPage