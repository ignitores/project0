import React from "react";
import './details.css';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { axiosInstance } from '../../config'
import { ThreeDots } from 'react-loader-spinner'
import Navbar from '../../components/navbar/Navbar'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ReactStars from 'react-stars'

const Details = () => {
  const { id } = useParams()

  const [value, setValue] = useState(null);
  const [cakeImage, setCakeImage] = useState("");
  const [images, setImages] = useState([])
  const [cakePrice, setCakePrice] = useState(0);
  let [quantity, setQuantity] = useState(1)
  const [amount, setAmount] = useState(0)


  const fetchData = () => {
    axiosInstance.get('/cake/cakeByID/' + id)
      .then((response) => {
        const cakedata = response.data
        setValue(cakedata)
        setImages(cakedata.images);
        setCakeImage(cakedata.images[0])

        // Set initial size and prize of cake
        let size = document.getElementById('size');
        let currSize = size?.value;
        let currPrize = cakedata.sizeAndPrice[currSize]
        setCakePrice(currPrize);

        // set intitial amount
        setAmount(currPrize * quantity)

      })
  }

  // function to update size and price of cake on change
  const sizeChange = () => {
    let size = document.getElementById('size');
    let currSize = size?.value;
    let currPrize = value.sizeAndPrice[currSize]
    setCakePrice(currPrize);
    setAmount(currPrize * quantity);
  }

  // function to increment the quantity and update amount
  const incrementQuantity = () => {
    quantity++;
    setQuantity(quantity);
    setAmount(cakePrice * quantity);
  }

  // function to decrement the quantity and update amount
  const decrementQuantity = () => {
    if (quantity > 1) {
      quantity--;
      setQuantity(quantity);
      setAmount(cakePrice * quantity);
    }
  }

  // checkout function
  const handleCheckout = async () => {
    // settting selected amount and quantity for cake and sending to checkout
    value['Amount'] = amount;
    value['Quantity'] = quantity;

    const response = await axiosInstance.post('/stripe/create-checkout-session', { value, });
    // console.log(response);
    if (response.status !== 200) console.log('Failed');

    else if (response.data.url) {
      window.location.href = response.data.url;
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  if (value === null) {
    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
    return (
      <div style={style}>
        <ThreeDots color="#00BFFF" height={80} width={80} />
      </div>
    )
  }
  else {
    return (
      <>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" /><div className="pd-wrap">
          <Navbar />
          <div className="description-container">
            <div className="heading-section">
              <h2 className="cake_details_heading">Cake Details</h2>
            </div>
            <div className="row">
              <div className="col-md-6 img_container">
                {/* <img src={value.images[0]} className="cake_img" /> */}
                <img src={cakeImage} className="cake_img" />
                {/* <div className={`${imgPreview.length > 0 ? `image_continer` : 'image_continer_hide'}`}> */}
                <div className='desc_img_container'>

                  {
                    images.map((i) => {
                      return (
                        <img src={i} alt="." className="desc_cake_img" onClick={() => setCakeImage(i)} />
                      )
                    })
                  }
                </div>

              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">{value.name}</div>
                    <div className="reviews-counter">
                      <div className="rate">
                        <ReactStars
                          count={5}
                          size={24}
                          color2={'#ffd700'}
                          value={value.sumOfReviews / value.totalNoOfReviews}
                          edit={false}
                          half={true} />
                      </div>
                      <span className="review">{value.totalNoOfReviews} Reviews</span>
                    </div>
                    {/* <div className="product-price-discount"><span>Rs. {Object.values(value.sizeAndPrice)[0]}</span></div> */}
                    <div className="product-price-discount"><span>₹ {cakePrice}</span></div>
                  </div>
                  {Object.keys(value.description).map((key, index) => {
                    return (
                      <div key={index}>
                        <p>
                          {key}: {value.description[key]}
                        </p>
                      </div>
                    );
                  })}

                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="size">Size</label>
                      <select id="size" name="size" className="form-control" onChange={sizeChange}>
                        {Object.keys(value.sizeAndPrice).map((key, index) => {
                          return (
                            <option>{key}</option>
                          );
                        })}
                      </select>
                    </div>
                    {/* <div className="col-md-6">
                      <label htmlFor="color">Color</label>
                      <select id="color" name="color" className="form-control">
                        <option>Blue</option>
                        <option>Green</option>
                        <option>Red</option>
                      </select>
                    </div> */}
                  </div>
                  <div className="product-count">
                    <label htmlFor="size">Quantity</label>
                    <form action="#" className="display-flex">
                      <div className="qtyminus" onClick={decrementQuantity}>-</div>
                      <input type="text" name="quantity" value={quantity} className="qty" />
                      <div className="qtyplus" onClick={incrementQuantity}>+</div>
                      <span className="amt">Amount : </span>
                      <span className="cake_amount">₹ {amount}</span>
                    </form>
                    {/* <a href="#" className="round-black-btn" onClick={handleCheckout}>Add to Cart</a> */}
                    <button className="round-black-btn" onClick={handleCheckout}>Check out</button>
                    {/* <PayButton /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="product-info-tabs">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false">Reviews (0)</a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                  {Object.keys(value.description).map((key, index) => {
                    return (
                      <div key={index}>
                        <p>
                          <small>{key}: {value.description[key]}</small>
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                  <div className="review-heading">REVIEWS</div>
                  <p className="mb-20">There are no reviews yet.</p>
                  <form className="review-form">
                    <div className="form-group">
                      <label>Your rating</label>
                      <div className="reviews-counter">
                        <div className="rate">
                          <input type="radio" id="star5" name="rate" defaultValue={5} />
                          <label htmlFor="star5" title="text">5 stars</label>
                          <input type="radio" id="star4" name="rate" defaultValue={4} />
                          <label htmlFor="star4" title="text">4 stars</label>
                          <input type="radio" id="star3" name="rate" defaultValue={3} />
                          <label htmlFor="star3" title="text">3 stars</label>
                          <input type="radio" id="star2" name="rate" defaultValue={2} />
                          <label htmlFor="star2" title="text">2 stars</label>
                          <input type="radio" id="star1" name="rate" defaultValue={1} />
                          <label htmlFor="star1" title="text">1 star</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Your message</label>
                      <textarea className="form-control" rows={10} defaultValue={""} />
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" name className="form-control" placeholder="Name*" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" name className="form-control" placeholder="Email Id*" />
                        </div>
                      </div>
                    </div>
                    <button className="round-black-btn">Submit Review</button>
                  </form>
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'center', fontSize: '14px', paddingBottom: '20px' }}>Get free gitft packs for your next 5 order at <a href="#" target="_blank" style={{ color: '#ff5e63', fontWeight: 'bold' }}>TEAM IGNITORES</a></div>
          </div>
        </div>
      </>
    )
  }
}

export default Details