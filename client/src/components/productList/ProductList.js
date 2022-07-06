import React from 'react'
import { useState, useEffect } from 'react'
import './productList.css'
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import ProductRow from '../productRow/ProductRow';
import { axiosInstance } from '../../config';
import { ThreeDots } from 'react-loader-spinner'

const ProductList = () => {

    const [value, setValue] = useState([])

    const fetchAllCakes = async () => {
        try {
            const res = await axiosInstance.get('/cake/allcakes')
            setValue(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {

        fetchAllCakes();
    }, [])
    // console.log(value);

    let no = 1;

    if (value.length === 0) {
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
                <div className="productList_container">
                    <h1 className="productTitle">Product List</h1>
                    <div className="productContainer">

                        <div className="productAttribute">
                            <span className="items serialNo serialNo_attribute">Sr No.</span>
                            <span className="items prodId prodId_attribute">Product Id</span>
                            <span className="items prodName prodName_attribute">Product Name</span>
                            {/* <span className="items prodImg">Image</span> */}
                            <div className="prodImg prodImg_attribure">
                                <span>Image</span>

                            </div>
                            <div className="update_delete_container update_delete_container_attribute">
                                <span className="items  prod_edit_attribute">Edit</span>
                                <span className="items  prod_delete_attribute" >Delete</span>
                            </div>
                        </div>

                        <div className="productItemList">

                            {

                                value.map(values => (

                                    <ProductRow
                                        key={values._id}
                                        serialNo={no++}
                                        id={values._id}
                                        name={values.name}
                                        imgSrc={values.images[0]}
                                    />
                                ))
                            }


                        </div>

                    </div>

                </div>
            </>
        )
    }
}

export default ProductList