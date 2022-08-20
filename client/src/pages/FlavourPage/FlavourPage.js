import React, { useState, useEffect } from 'react'
import CardSection from '../../components/cardsection/CardSection'
import { useParams } from 'react-router'
import { axiosInstance } from '../../config';
import Navbar from '../../components/navbar/Navbar';

const FlavourPage = () => {
    const [cake, setCake] = useState([])
    const flavour = useParams().flavour;
    console.log(flavour);

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
                            <CardSection title={`${flavour} cakes`} dat={cake} />
                        </div>
                    )
            }
        </>
    )
}

export default FlavourPage