import React from 'react'
import './Register.css'

import logo from './logo.png';
import cake from './cake.png';


const Register = () => {
    return (
        <>
            <div className="container">
                <div className="form">
                    <div className="heading">
                        <img src={logo} alt="." className="cake_logo" />
                        <h1><b>Registration Form</b></h1>
                    </div>
                    {/* form */}
                    <div className="wrap">
                        <div className="f1">
                            <label>First name</label>
                            <input type="text" />
                            <span className="focus-input" />
                        </div>
                        <div className="f2">
                            <label>Last name</label>
                            <input type="text" />
                            <span className="focus-input" />
                        </div>
                    </div>
                    <div className="wrap2">
                        <label>Username</label>
                        <input type="text" />
                        <span className="focus-input2" />
                    </div>
                    <div className="wrap2">
                        <label>E-Mail</label>
                        <input type="email" />
                        <span className="focus-input2" />
                    </div>
                    <div className="wrap2">
                        {/* <span class="country-code"></span> */}
                        <label>Mobile Number</label>
                        <input type="number" />
                        <span className="focus-input2" />
                    </div>
                    <button className="btn">Register</button>
                </div>
                {/* image */}
                <div className="image">
                    <img src={cake} alt="." className="img" />
                </div>
            </div>
        </>
    )
}

export default Register