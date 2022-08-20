import React from 'react'

const FlavourCard = (props) => {
    const flavourClick = (_flavour) => {
        _flavour = _flavour.toLowerCase();
        window.open(`/cake/${_flavour}`);
    }
    const backgroundStyle = {
        backgroundImage: `url(${props.bgImg})`,
        backgroundSize: 'cover',
    };

    return (
        <>
            <div className="card" style={backgroundStyle} onClick={() => flavourClick(props.flavour)}>
                <div className="content">
                    <h2 className="title">{props.flavour} <br />Cake</h2>
                    <p className="copy">
                        {props.description}
                    </p>
                    <button className="btn">Explore</button>
                </div>
            </div>
        </>
    )
}

export default FlavourCard