import React, { useState } from 'react'
import './productRow.css'
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { axiosInstance } from '../../config';

const ProductRow = (props) => {

    const deleteCake = async (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this Cake?');
        if (confirmDelete) {
            try {
                await axiosInstance.delete(`/cake/deleteCake/${id}`)
                alert("Cake Deleted Successfully")
                window.location.reload();

            } catch (error) {
                console.log(error);
            }
        }
    }

    const editCake = () => {
        alert("TODO: To Be Implement");
    }

    return (
        <>
            <div className="product_row">
                <span className="items serialNo">{props.serialNo}</span>
                <span className="items prodId">{props.id}</span>
                <span className="items prodName">{props.name}</span>
                {/* <span className="items prodImg">Image</span> */}
                <div className="prodImg">
                    <img src={props.imgSrc} alt="" className="productImage" />

                </div>
                <div className="update_delete_container">
                    <span className="items edit_delete edit_icon" onClick={editCake}><FaEdit className="prod_icons" /></span>
                    <span className="items edit_delete delete_icon" onClick={() => deleteCake(props.id)}><MdDelete className="prod_icons" /></span>
                </div>
            </div>

        </>
    )
}

export default ProductRow