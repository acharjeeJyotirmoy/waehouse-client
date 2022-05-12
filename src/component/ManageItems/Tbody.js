import React from 'react';

import { useNavigate } from 'react-router-dom';

import useProducts from '../Hooks/useProducts';

const Tbody = props => {
    const{_id,name,price,quantity,supplier} = props.product;
    const navigate = useNavigate();
    const [products,setProducts]=useProducts()
   
    

    const handleUpdate = id =>{
        navigate('/update/'+id)
    }
    //deleting products
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url =`http://localhost:5000/products/${id}`
            fetch(url,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                const remaining = products.filter(product=>product._id !== id)
                setProducts(remaining)
            })
        }
    }

    return (
        <>
            <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td>{quantity}</td>
                        <td>{supplier}</td>
                        
                        <td><button onClick={()=>handleUpdate(_id)} className='bg-primary text-white rounded'>Update</button></td>
                        <td><button onClick={()=>handleDelete(_id)} className='bg-primary text-white rounded'>Delete</button></td>
                    </tr>
                    
            </tbody>
        </>
    );
};

export default Tbody;