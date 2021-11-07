import React from 'react'
import './styles.scss'
import SHOPDATA from './ShopData'
import Collectionitem from '../collection-item/Collection-item'
import Custombutton from '../custom-button/custom-button'

const Collectionoverview = () => {
    return (
        <div className="collection-overview">
            {SHOPDATA.map(({ id, ...otherProps }) => (
               <Collectionitem key={id} {...otherProps} />
            ))}

            <Custombutton> see more </Custombutton>
        </div>
    )
}

export default Collectionoverview
