import React from 'react';
import { Table } from 'react-bootstrap';
import useProducts from '../Hooks/useProducts';
import Tbody from './Tbody';

const ManageItems = () => {
    const [products, setProducts] = useProducts();

    return (
        <div>
            <h2>All Products</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Supplier</th>
                        
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {
                    products.map(product=><Tbody
                    key={product._id}
                    product={product}></Tbody>)
                }
                
            </Table>
            <button className='w-50 mx-auto bg-primary text-white p-2 rounded mb-5'>Add New Items</button>
        </div>
    );
};

export default ManageItems;