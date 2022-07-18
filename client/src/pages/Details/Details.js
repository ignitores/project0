import React from "react";
import './details.css';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { axiosInstance } from '../../config'
import { ThreeDots } from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const Details=() => {
    const {id}=useParams()

    const [value, setValue] = useState(null);
    

    const fetchData = () => {
        axiosInstance.get('/cake/cakeByID/'+id)
        .then((response) => {
            const cakedata=response.data
            setValue(cakedata)
        })
        
        
    }

    useEffect(() => {
        fetchData()
    }, [])
    if (value === null) {
        const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
        return (
            <div style={style}>
                <ThreeDots color="#00BFFF" height={80} width={80} />
            </div>
        )
    }
    else {  
        //for testing TODO: needed proper styling and designing 
        return (
            <>
                <h1>{value.name}</h1>
                <h2>{Object.keys(value.description)[0]} : {Object.values(value.description)[0]}</h2>        
            </>
        )
    }
}

export default Details