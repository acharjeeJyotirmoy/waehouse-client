import React, { useEffect, useState } from 'react';

const Home = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data=> setProducts(data))
    },[])

    return (
        <div>
            <h2>Images</h2>
            {
                products.map(product=> <img src={product.img} alt=""/>)
            }
        </div>
    );
};

export default Home;