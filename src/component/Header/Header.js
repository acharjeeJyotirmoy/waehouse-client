import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
      };
    return (
        <div className='mt-5 grid lg:grid-cols-2 md:grid-cols-1 border-b border-blue-700'>
            <div>
                <h2>Title</h2>
            </div>
            <div>
                <Link className='mr-2 border p-2 bg-primary text-white rounded-full text-decoration-none' to='/manage'>Manage Item</Link>
                <Link className='mr-2 border p-2 bg-primary text-white rounded-full text-decoration-none' to='/myitems'>My Items</Link>
                <Link className='mr-2 border p-2 bg-primary text-white rounded-full text-decoration-none' to='/add'>Add Data</Link>
                {
                user ? <button onClick={logout} className='mr-2 border p-2 bg-danger text-white rounded-full text-decoration-none'>Logout</button>
                : <Link className='mr-2 border p-2 bg-primary text-white rounded-full text-decoration-none' to='/login'>Login</Link>
                
                }
                <Link className='mr-2 border p-2 bg-primary text-white rounded-full text-decoration-none' to='/signup'>Signup</Link>
            </div>
        </div>
    );
};

export default Header;