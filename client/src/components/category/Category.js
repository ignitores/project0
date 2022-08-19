import React, { useState } from 'react'
import CategoryPage from '../../pages/CategoryPage/CategoryPage';
import { useNavigate } from 'react-router-dom';
import CategoryCard from '../CategoryCard/CategoryCard';
import "./category.css"

const Category = (props) => {
  const navigate = useNavigate();
  // console.log(props.data);

  const categoryClick = (_category) => {
    // setCategory(_category);
    console.log("Birthday Category Click");
    localStorage.setItem("category", _category);
    window.open("/category");


  }
  return (
    <>

      <div><h1>Ocassion Based</h1></div>
      <main className="page-content">
        {/* <div className="card" onClick={categoryClick}>
          <div className="content">
            <h2 className="title">Birthday <br />Cake</h2>
            <p className="copy">
              Check out the cakes for the Birthday eve and make it memorable
            </p>
            <button className="btn">Explore</button>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">Anniversary <br />Cake</h2>
            <p className="copy">
              It's the day always dreamed of ,make it more special with this cake
              category
            </p>
            <button className="btn">Explore</button>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">
              Ocassional<br />
              Cakes
            </h2>
            <p className="copy">
              Why to make the ocassion incomplete, spread the sweetenes with the
              cakeness.
            </p>
            <button className="btn">Explore</button>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">Custom <br />Cakes</h2>
            <p className="copy">
              Plan your cake in your own design with these fabulous way
            </p>
            <button className="btn">Explore</button>
          </div>
        </div> */}

        <CategoryCard
          category="Birthday"
          description="Check out the cakes for the Birthday eve and make it memorable"

        />

        <CategoryCard
          category="Anniversary"
          description="It's the day always dreamed of ,make it more special with this cake category"
        />

        <CategoryCard
          category="Ocassional"
          description="Why to make the ocassion incomplete, spread the sweetenes with the cakeness."

        />

        <CategoryCard
          category="Wedding"
          description="Plan your cake in your own design with these fabulous way"
        />

      </main>

    </>
  )
}
export default Category