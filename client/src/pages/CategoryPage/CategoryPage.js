import React, { useState, useEffect } from 'react'
import CardSection from '../../components/cardsection/CardSection'
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../config';
import './CategoryPage.css'
import Navbar from '../../components/navbar/Navbar';

const CategoryPage = () => {

    const [cake, setCake] = useState([])
    let category = localStorage.getItem('category');
    console.log(category);

    const fetchAllCakes = async () => {
        try {
            const res = await axiosInstance.get(`cake/cakesByTags/${category}`)
            setCake(res.data);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {

        fetchAllCakes();
    }, [])
    console.log(cake);
    return (
        <>
            <Navbar />
            <div className="categoryPage_container">
                <CardSection title={`${category} cakes`} dat={cake} />
            </div>
        </>
    )
}

export default CategoryPage