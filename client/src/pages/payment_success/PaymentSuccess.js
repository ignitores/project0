import React from 'react'
import './PaymentSuccess.css'
import { useNavigate } from 'react-router-dom'

const PaymentSuccess = () => {
  const navigate = useNavigate()
    return (
      <div className="success-card">
      <div className="success-tick">
          {/* <img src="green-tick.png" id="tick" /> */}
          <div id="tick" ></div>
        <div className="success-tick-descp">
          Your payment has been Successfully processed !<br />
          Details of transaction are included below
        </div>   
      </div>
      {/* order and transaction details below  */}
      <div className="tnx-details">
        <br />
        <span className="tnx-number">Transaction Number : </span><span className="tnx-number" id="tnx-num">1234567890</span>
        <br />
        <span className="tnx-amt">TOTAL AMOUNT PAID</span><span className="tnx-amt" id="tnx-amt">₹xx.xx/-</span>            
        <br />
        <span className="tnx-by">PAID BY</span><span className="tnx-by" id="tnx-by">PAYTM</span>
        <br />
        <span className="tnx-dt">TRANSACTION DATE</span>
        <span className="tnx-dt" id="tnx-date">04/1/2023 sat</span><span className="tnx-dt" id="tnx-time">10:37 pm</span>
        <br />    
        <button className="home-btn" id="home-btn" onClick={() => navigate('/home')}>Back to home</button>
      </div>
    </div>
    )
}

export default PaymentSuccess