import React from 'react'
import './dashboard.css'

import Sidenav from '../../components/sidenav/Sidenav'
import DashboardRight from '../../components/dashboard_right/DashboardRight'

const Dashboard = () => {
    return (
        <>
            <div className="dashboard_container">
                <Sidenav />
                <DashboardRight />
            </div>
        </>
    )
}


export default Dashboard