import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const params = useParams();


    const [product, setProduct] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/products/${params.id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product])

    //update stock button

    const updateStock = () => {
        const quantity = product?.quantity + 1;
        const update = { quantity };

        const url = `http://localhost:5000/products/${params.id}`
        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })


    }


    //deliver button

    const updateDeliver = () => {
        const quantity = product?.quantity - 1;
        const update = { quantity };

        const url = `http://localhost:5000/products/${params.id}`
        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }


    //apdate quantity
    const updateQuantity = event => {
        event.preventDefault();
        const quantity = event?.target?.quantity?.value;
        const update = { quantity };
        console.log(update)

        //applying fetch put method
        const url = `http://localhost:5000/products/${params.id}`
        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div>
            <p>This is item details of:{params.id}</p>
            <div className='grid grid-cols-2'>
                <div>
                    <img className='mx-auto' src={product.img} alt="" />
                </div>
                <div className='border w-50 bg-orange-400 p-5 text-white mx-auto'>
                    <h2>{product.name}</h2>

                    <p>Price: {product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                    <button onClick={updateStock} className='bg-white text-black mr-2 p-2 rounded'>Stock</button>
                    <button onClick={updateDeliver} className='bg-white text-black p-2 rounded'>Deliver</button>
                    <form onSubmit={updateQuantity}>
                        <input className='text-black mt-2' type="number" name="quantity" id="" />
                        <input type="submit" value="Update Quantity" />
                    </form>
                </div>
            </div>


        </div>
    );
};

export default Update;