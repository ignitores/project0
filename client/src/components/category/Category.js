import React from 'react'
import "./category.css"

const Category = () => {
    return(
<>

    <main className ="page-content">
      <div className ="card">
        <div className ="content">
          <h2 className ="title">Birthday <br />Cake</h2>
          <p className ="copy">
            Check out the cakes for the Birthday eve and make it memorable
          </p>
          <button className ="btn">Explore</button>
        </div>
      </div>
      <div className ="card">
        <div className ="content">
          <h2 className ="title">Anniversary <br />Cake</h2>
          <p className ="copy">
            It's the day always dreamed of ,make it more special with this cake
            category
          </p>
          <button className ="btn">Explore</button>
        </div>
      </div>
      <div className ="card">
        <div className ="content">
          <h2 className ="title">
            Ocassional<br />
            Cakes
          </h2>
          <p className ="copy">
            Why to make the ocassion incomplete, spread the sweetenes with the
            cakeness.
          </p>
          <button className ="btn">Explore</button>
        </div>
      </div>
      <div className ="card">
        <div className ="content">
          <h2 className ="title">Custom <br />Cakes</h2>
          <p className ="copy">
            Plan your cake in your own design with these fabulous way
          </p>
          <button className ="btn">Explore</button>
        </div>
      </div>
    </main>

</>
    )
}
export default Category