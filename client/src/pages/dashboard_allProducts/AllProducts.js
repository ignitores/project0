import React from 'react'
import './allProduct.css'
import ProductList from '../../components/productList/ProductList'
import Sidenav from '../../components/sidenav/Sidenav'

const AllProducts = () => {
    return (
        <>
            <div className="dashboard_container">
                <Sidenav />
                <ProductList />
            </div>
        </>
    )
}

export default AllProducts