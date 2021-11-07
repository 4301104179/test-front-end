import React from 'react'
import './styles.scss'

const Productitem = ({ Description, Logo, image, icon }) => {
    return (
        <div className="product-item">
            <img
                src={image}
                alt="bestImage"
            />

            <img
                src={Logo}
                alt="Logo"
                className="Logo"
            />
            <div className="content">
                <div className="text-box">
                    <span className="How-to-create-mobile-optimized Text-Style-8">
                        {Description}
                    </span>

                    <img
                        src={icon}
                        alt="icon"
                        className="icon"
                    />
                </div>
            </div>
        </div>
    )
}

export default Productitem
