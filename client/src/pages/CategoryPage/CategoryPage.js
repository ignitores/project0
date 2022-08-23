import React, { useState, useEffect } from 'react'
import CardSection from '../../components/cardsection/CardSection'
import { useParams } from 'react-router'
import { axiosInstance } from '../../config';
import './CategoryPage.css'
import Navbar from '../../components/navbar/Navbar';
import axios from 'axios'


const CategoryPage = () => {

    const [cake, setCake] = useState([])
    const tag = useParams().tag;
    // console.log(tag);

    const [value, setValue] = useState(
        {
            cakes_low_to_high: null,
            cakes_high_to_low: null,
            cakes_sort_by_orders: null,
        }
    );

    const fetchData = () => {
        const req1 = axiosInstance.get(`/cake/cakesByTagsSortedByPriceAsc/${tag}`);
        const req2 = axiosInstance.get(`/cake/cakesByTagsSortedByPriceDesc/${tag}`);
        const req3 = axiosInstance.get(`/cake/cakesByTagsSortedByOrders/${tag}`);

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


    const fetchAllCakes = async () => {
        try {
            const res = await axiosInstance.get(`/cake/cakesByTags/${tag}`)
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
        let tagValue = document.getElementById('filter_cake_tags').value;

        if (tagValue === "low_to_high") {
            setCake(value.cakes_low_to_high);
        }
        else if (tagValue === "high_to_low") {
            setCake(value.cakes_high_to_low);
        }
        else if (tagValue === "review") {
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

                                <span for="cake" className='sort_label'>Sort Cakes By:</span>

                                <select name="cake" id="filter_cake_tags" className='selection_container' onChange={handleSortCakes}>
                                    <option value="">Apply Filter</option>
                                    <option value="low_to_high">Price: Low to High</option>
                                    <option value="high_to_low">Price: High to Low</option>
                                    <option value="review">Review</option>

                                </select>

                            </div>
                            <CardSection title={`${tag} cakes`} dat={cake} />
                        </div>
                    )
            }
        </>
    )
}

export default CategoryPage