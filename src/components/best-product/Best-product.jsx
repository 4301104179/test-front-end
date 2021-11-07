import React from 'react'
import './styles.scss'
import bestProduct from '../../assets/bes-bg.webp'
import bestImage01 from '../../assets/best-image-01.webp'
import bestImage02 from '../../assets/best-image-02.webp'
import bestImage03 from '../../assets/best-image-03.webp'
import Logo1 from '../../assets/producticon-01.webp'
import Logo2 from '../../assets/producticon-02.webp'
import Logo3 from '../../assets/producticon-03.webp'
import goIcon from '../../assets/go-icon.webp'
import Productitem from '../product-item/Product-item'

const productItems = [
    {
        id: 1,
        Description: "How to create mobile-optimized",
        Logo: Logo1,
        icon: goIcon,
        image: bestImage01
    },
    {
        id: 2,
        Description: "How to create mobile-optimized",
        Logo: Logo2,
        icon: goIcon,
        image: bestImage02
    },
    {
        id: 3,
        Description: "How to create mobile-optimized",
        Logo: Logo3,
        icon: goIcon,
        image: bestImage03
    }

]

const Bestproduct = () => {
    return (
        <div className="background-best-product">
            <img
                src={bestProduct}
                alt="introduction"
            />

            <div className="text-best-product">
                <span className="Best-Product Text-Style-5">
                    best product
                </span>

                <span className="How-to-create-mobile-optimized-videos-in-minutes-Not-a-designer">
                    How to create mobile-optimized videos in minutes. Not a designer,
                    every team makes a lot of videos Can be trimmed. Take the first
                </span>
            </div>

            <div className="products">
                {productItems.map(({ id, ...otherProps }) => (
                    <Productitem key={id} {...otherProps} />
                ))}
            </div>
        </div>
    )
}

export default Bestproduct
