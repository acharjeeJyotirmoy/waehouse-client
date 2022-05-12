import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import SocialLogin from '../ScialLogin/SocialLogin';

const Signup = () => {
    const [wrong,setWrong] = useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const handleSignup = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        createUserWithEmailAndPassword(email,password);
        

    }
    return (
        <div>
            <h2>Sign up</h2>
            <form onSubmit={handleSignup}>
                <input type="email" name="email" placeholder='Enter your Email' id="" required/><br/>
                <input type="password" name="password" id="" placeholder='Enter your password' required/><br/>
                <input type="password" name="confirmPassword" id="" placeholder='Enter your password again!' required/><br/>
                <input type="submit" value="Login"/><br/>
                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default Signup;