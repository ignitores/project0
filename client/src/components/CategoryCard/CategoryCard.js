import React from 'react'
import '../category/category.css'

const CategoryCard = (props) => {

    const categoryClick = (_category) => {
        _category = _category.toLowerCase();
        window.open(`/category/${_category}`);
    }

    const backgroundStyle = {
        backgroundImage: `url(${props.bgImg})`,
        backgroundSize: 'cover',
    };
    return (
        <>

            <div className="card category_card" onClick={() => categoryClick(props.category)} style={backgroundStyle}>
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