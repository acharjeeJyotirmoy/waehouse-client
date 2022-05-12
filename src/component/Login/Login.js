import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../ScialLogin/SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email,password)
    }
    return (
        <div>
            <h2>Log in</h2>
            <form onSubmit={handleLogin}>
                <input type="email" name="email" placeholder='Enter your Email' id="" required/><br/>
                <input type="password" name="password" id="" placeholder='Enter your password' required/><br/>
                <input type="submit" value="Login"/><br/>
                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default Login;