import React from 'react'
import '../category/category.css'

const CategoryCard = (props) => {

    const categoryClick = (_category) => {
        localStorage.setItem("category", _category.toLowerCase());
        window.open("/category");
    }

    return (
        <>
            <div className="card" onClick={() => categoryClick(props.category)}>
                <div className="content">
                    <h2 className="title">{props.category} <br />Cake</h2>
                    <p className="copy">
                        {props.description}
                    </p>
                    <button className="btn">Explore</button>
                </div>
            </div>
        </>
    )
}

export default CategoryCard