import React from 'react'
import './styles.scss'
import { ReactComponent as Heart } from '../../assets/collection-item/heart.svg'


const Collectionitem = ({ description, price, image, rate }) => {
    return (
        <div className="collection-item">
            <div
                className='image'
                style={{
                    backgroundImage: `url(${image})`
                }}
            />
            <div className='description Text-Style-8'> {description} </div>
            <div className='collection-footer'>
                <span className='price Text-Style-9'>{price} won</span>
                <span className="rate Text-Style-9" >
                    <span className="heart-rate"> <Heart /> </span>
                    {rate}
                </span>
            </div>

        </div>
    )
}

export default Collectionitem
