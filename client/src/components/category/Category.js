import React from 'react'
import CategoryCard from '../CategoryCard/CategoryCard';
import "./category.css"

const Category = () => {
  return (
    <>
      <div className="category_container">
        <h1 className='category_title'>Ocassion Based</h1>
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
            bgImg="https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlydGhkYXklMjBjYWtlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"

          />

          <CategoryCard
            category="Anniversary"
            description="It's the day always dreamed of ,make it more special with this cake category"
            bgImg="https://images.unsplash.com/photo-1520181973954-cf92f53359ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNha2UlMjB3ZWRkaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          />

          <CategoryCard
            category="Ocassional"
            description="Why to make the ocassion incomplete, spread the sweetenes with the cakeness."
            bgImg="https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80"

          />

          <CategoryCard
            category="Wedding"
            description="Plan your cake in your own design with these fabulous way"
            bgImg="https://cdn001.cakecentral.com/gallery/2015/03/900_32615tpgd_an-under-the-sea-themed-graduation-cake-the-students-made-some-awesome-artwork-and-the-cake-is-based-off-of-their-art-they-are-made-of.jpg"
          />

        </main>

      </div>
    </>
  )
}
export default Category