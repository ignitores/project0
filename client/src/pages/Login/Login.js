import React, { useState } from 'react'
import './Login.css'

import logo from './logo.png';
import { axiosInstance } from '../../config';


const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const handleLogin = async () => {
        const dat = JSON.stringify({
            email: email,
            password: password
        });
        const conf = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const res = await axiosInstance.post('/user/userlogin', dat, conf);
        if (res.status === 200)
            alert("Login Successful");
        else
            alert("Login Unsuccessful");
    }
    return (
        <>
            <div className="container">
                <div className="form">
                    <div className="heading">
                        <img src={logo} alt="." className="cake_logo" />
                        <h1 id="register">Login</h1>
                    </div>
                    {/* form */}
                    <div className="wrap2">
                        <label>Email</label>
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
                    <button className="btn" onClick={() => { handleLogin(); }}>Login</button>
                </div>
            </div>
        </>
    )
}

export default Login