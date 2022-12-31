import React, { useState } from 'react'
import './Register.css'

import logo from './logo.png';
import cake from './cake.png';
import { axiosInstance } from '../../config';


const Register = () => {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");
    const [mobnumber, setmobnumber] = useState("");

    const handleRegister = async () => {
        const dat = JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            mobnumber: mobnumber,
            email: email,
            password: password
        });
        const conf = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const res = await axiosInstance.post('/user/newuser', dat, conf);
        if (res.status === 200)
            alert("Registration Successful");
        else 
            alert("Registration Unsuccessful");
    }
    return (
        <>
            <div className="container">
                <div className="form">
                    <div className="heading">
                        <img src={logo} alt="." className="cake_logo" />
                        <h1 id="register">Registration</h1>
                    </div>
                    {/* form */}
                    <div className="wrap">
                        <div className="f1">
                            <label>First name</label>
                            <input type="text" value={firstname}
                                onChange={(e) => setfirstname(e.target.value)} />
                            <span className="focus-input" />
                        </div>
                        <div className="f2">
                            <label>Last name</label>
                            <input type="text" value={lastname}
                                onChange={(e) => setlastname(e.target.value)} />
                            <span className="focus-input" />
                        </div>
                    </div>
                    
                    <div className="wrap2">
                        {/* <span class="country-code"></span> */}
                        <label>Mobile Number</label>
                        <input type="tel" required minLength="10" maxLength="10" value={mobnumber}
                            onChange={(e) => setmobnumber(e.target.value)} />
                        <span className="focus-input2" />


                    </div>
                    <div className="wrap2">
                        <label>E-Mail</label>
                        <input type="email" value={email}
                            onChange={(e) => setemail(e.target.value)} />
                        <span className="focus-input2" />
                    </div>

                    <div className="wrap2">
                        <label>Password</label>
                        <input type="password" value={password}
                            onChange={(e) => setpassword(e.target.value)} />
                        <span className="focus-input2" />
                    </div>
                    
                    <button className="btn" onClick={() => { handleRegister(); }}>Register</button>
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