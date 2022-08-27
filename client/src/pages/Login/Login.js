import React, { useState } from 'react'
import './Login.css'

import logo from './logo.png';
import cake from './cake.png';
import { axiosInstance } from '../../config';


const Login = () => {
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [mobnumber, setmobnumber] = useState("");
    const [password, setpswd] = useState("");

    const handleRegister = async () => {
        const dat = JSON.stringify({
            username: username,
            email: email,
            mobnumber: mobnumber,
            password: password 
        });
        const conf = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const res = await axiosInstance.post('/user/newuser', dat, conf);
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
                        <label>Username</label>
                        <input type="text" value={username}
                            onChange={(e) => setusername(e.target.value)} />
                        <span className="focus-input2" />
                    </div>
                    {/* <div className="wrap2">
                        <label>E-Mail</label>
                        <input type="email" value={email}
                            onChange={(e) => setemail(e.target.value)} />
                        <span className="focus-input2" />
                    </div> */}
                    {

                        // <div className="wrap2">
                        // {/* <span class="country-code"></span> */}
                        // <label>Mobile Number</label>
                        // <input type="tel" required minLength="10" maxLength="10" value={mobnumber}
                        //     onChange={(e) => setmobnumber(e.target.value)} />
                        // <span className="focus-input2" />
                        // </div>
                        }
                    <div className="wrap2">
                        {/* <span class="country-code"></span> */}
                        <label>Password</label>
                        <input type="tel" required minLength="10" maxLength="10" value={password}
                            onChange={(e) => setmobnumber(e.target.value)} />
                        <span className="focus-input2" />


                    </div>
                    <button className="btn" onClick={() => { handleRegister(); }}>Login</button>
                </div>
                {/* image */}
                {/* <div className="image">
                    <img src={cake} alt="." className="img" />
                </div> */}
            </div>
        </>
    )
}

export default Login