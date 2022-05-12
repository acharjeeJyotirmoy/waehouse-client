import React from 'react';

const Product = props => {
    const {_id,name,img,price,quantity,supplier} = props.product
    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt=""/>
            <p>{price}</p>
            <p>{quantity}</p>
            <p>{supplier}</p>
        </div>
    );
};

export default Product;