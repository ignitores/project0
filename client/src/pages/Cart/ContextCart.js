import { BrowserRouter as Router,Link} from 'react-router-dom';
import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";
import { useNavigate } from "react-router-dom";

const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);
  const navigate = useNavigate()
  const redirectToHome = () => {
    navigate('/home');
  }
  if (item.length === 0) {
    return (
      <>
        <header>
          <div className="continue-shopping">
            <img src="./imgs/arrow.png" alt="arrow" className="arrow-icon" onClick={redirectToHome}/> 
            <div className="nav-logo" >
        {/* <img src="./img/re.jpg" className="logo"/> */}
        <div class="logo" href="#">
          </div>
        </div>
           
          </div>
          <div className="cart-icon">
            <img src="./imgs/cart.png" alt="cart" />
            <p>{totalItem}</p>
          </div>
        </header>

        <section className="main-cart-section">
          <h1>shopping Cart</h1>
          <p className="total-items">
            you have <span className="total-items-count">{totalItem} </span>{" "}
            items in shopping cart
          </p>
        </section>
      </>
    );
  }

  return (
    <>
      <header>

        <div className="continue-shopping">
          <img src="./imgs/arrow.png" alt="arrow" className="arrow-icon" onClick={redirectToHome} />
          <div className="nav-logo" >
        {/* <img src="./img/re.jpg" className="logo"/> */}
        <div class="logo" href="#">
          </div>
        </div>
        

        </div>
        <div className="cart-icon">
        
          <img src="./imgs/cart.png" alt="cart" />
        
          <p>{totalItem}</p>
        </div>
        </header>
    

      <section className="main-cart-section">
     

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>

        <div className="card-total">
          <h4>
            Cart Total : <span>{totalAmount}₹</span>
          </h4>
          <button>checkout</button>
          <div class="space">
           </div>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </section>
    </>
  );
};

export default ContextCart;