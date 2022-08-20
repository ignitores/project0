import React, { useState, useEffect } from 'react'
import CardSection from '../../components/cardsection/CardSection'
import { useParams } from 'react-router'
import { axiosInstance } from '../../config';
import './CategoryPage.css'
import Navbar from '../../components/navbar/Navbar';

const CategoryPage = () => {

    const [cake, setCake] = useState([])
    const tag = useParams().tag;
    console.log(tag);

    const fetchAllCakes = async () => {
        try {
            const res = await axiosInstance.get(`cake/cakesByTags/${tag}`)
            setCake(res.data);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchAllCakes();
    }, [])
    // console.log(cake);
    return (
        <>
            <Navbar />
            {
                (cake.length === 0) ?
                    (
                        <h1>No cake found</h1>) :
                    (
                        <div className="categoryPage_container">
                            <CardSection title={`${tag} cakes`} dat={cake} />
                        </div>
                    )
            }
        </>
    )
}

export default CategoryPage