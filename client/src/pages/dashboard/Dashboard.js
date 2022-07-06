import React from 'react'
import './dashboard.css'
import logo from './radhika_bakery.png'

const Home = () => {

    return (

        <>
            <div>
                <div id="mySidenav" className="sidenav">
                    <p className="logo"><span>Radhika's </span>Bakery</p>
                    <a href="#" className="icon-a ighg"> Dashboard</a>
                    <a href="#" className="icon-a"><i className="fa fa-birthday-cake icons" /> Add Cake</a>
                    <a href="#" className="icon-a"><i className="fa fa-trash icons" /> Delete Cake</a>
                    <a href="#" className="icon-a"><i className="fa fa-refresh" />Update Cake</a>
                    <a href="#" className="icon-a"><i className="fa fa-shopping-cart icons" /> Orders</a>
                    <a href="#" className="icon-a"><i className="fa fa-sign-out icons" /> Log out</a>
                </div>

                <div id="main">
                    <div className="head">
                        <div className="col-div-6">
                            <span style={{ fontSize: '50px', cursor: 'pointer', color: 'white' }} className="nav"><b>Dashboard</b></span>
                            {/* <span style="font-size: 30px;  color: white" class="nav2">☰ Dashboard</span> */}
                        </div>
                        <div className="col-div-6">
                            <div className="profile">
                                <img src={logo} className="pro-img" />
                            </div>
                        </div>
                        <div className="clearfix" />
                    </div>
                    <div className="clearfix" />
                    <br />
                    <div className="col-div-3">
                        <div className="box">
                            <p>400<br /><span>Cakes</span></p>
                            <i className="fa fa-birthday-cake box-icon" />
                        </div>
                    </div>
                    <div className="col-div-3">
                        <div className="box">
                            <p>100<br /><span>Orders (Today)</span></p>
                            <i className="fa fa-calendar box-icon" />
                        </div>
                    </div>
                    <div className="col-div-3">
                        <div className="box">
                            <p>80<br /><span>Completed</span></p>
                            <i className="fa fa-calendar-check-o box-icon" />
                        </div>
                    </div>
                    <div className="col-div-3">
                        <div className="box">
                            <p>20<br /><span>Pending</span></p>
                            <i className="fa fa-calendar-o box-icon" />
                        </div>
                    </div>
                    <div className="clearfix" />
                    <br /><br />
                    <div className="col-div-8">
                        <div className="box-8">
                            <div className="content-box">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Laboriosam eveniet eum molestias suscipit ad quidem, laudantium
                                    minus et eligendi vel labore repellendus? Iure magnam vero unde
                                    eaque repellat, dicta sint.lorem Lorem ipsum dolor, sit amet
                                    consectetur adipisicing elit. Accusamus eveniet nobis sapiente
                                    aspernatur id odio minima autem dolores. Unde deserunt aspernatur
                                    hic quae atque, voluptate fuga officiis adipisci culpa dolore.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet
                                    consectetur adipisicing elit
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-div-4">
                        <div className="box-4">
                            <div className="content-box">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                                    fugiat illum accusantium ex id consectetur molestiae eaque aut
                                    maiores, sapiente atque maxime dolor itaque, quod assumenda
                                    corporis corrupti itaque, quod assumenda.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix" />
                </div>
            </div>
        </>
    )
}


export default Home