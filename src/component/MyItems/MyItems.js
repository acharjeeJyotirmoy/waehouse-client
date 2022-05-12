import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const MyItems = () => {
    const [product, setProduct] = useState([])
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        const url = `http://localhost:5000/products/${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product])

    return (
        <div>
            <h6>My items</h6>
            <h6>{product.length}</h6>
        </div>
    );
};

export default MyItems;