import React from 'react'
import { Link } from 'react-router-dom';

const Sidenav = () => {
    return (
        <>
            <div id="mySidenav" className="sidenav">
                <Link to="/"><p className="logo"><span>Radhika's </span>Bakery</p></Link>
                <Link to="/dashboard" className="icon-a ighg"> Dashboard</Link>
                <Link to="/dashboard/allProducts" className="icon-a">All Products</Link>
                <Link to="/dashboard/addCake" className="icon-a"><i className="fa fa-birthday-cake icons" /> Add Cake</Link>
                <Link to="#" className="icon-a"><i className="fa fa-trash icons" /> Delete Cake</Link>
                <Link to="#" className="icon-a"><i className="fa fa-refresh" />Update Cake</Link>
                <Link to="#" className="icon-a"><i className="fa fa-shopping-cart icons" /> Orders</Link>
                <Link to="#" className="icon-a"><i className="fa fa-sign-out icons" /> Log out</Link>
            </div>
        </>
    )
}

export default Sidenav