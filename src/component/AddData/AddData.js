import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
const AddData = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/products`
        fetch(url,{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result =>{
            console.log(result)
        })
    };

    return (
        <div>
            <h2>Adding data</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='border' placeholder='Name' {...register("name")} />
                <input className='border' placeholder='Image Link' {...register("img")} />
                <input className='border' placeholder='Description' {...register("description")} />
                <input className='border' value={user?.email}  {...register("email")} />
                
                <input className='border' placeholder='Supplier' {...register("supplier")} />
                <input className='border' placeholder='Price' type="number" {...register("price")} />
                <input className='border' placeholder='Quantity' type="number" {...register("quantity")} />
                <input type="submit" value='Add Data' />
            </form>

        </div>
    );
};

export default AddData;