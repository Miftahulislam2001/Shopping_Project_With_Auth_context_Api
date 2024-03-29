import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext)

    const handleSignUp = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        
        if(password !== confirm){
            setError('password dose not matched');
            return
        }
        else if(password.length < 6){
            setError('password length minimum 6 Character');
            return
        }

        createUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error =>{
            setError(error.message)
            console.log(error);
        })
    }





    return (
        <div className='form-container'>
        <h2 className='form-title'>Sign Up</h2>
        <form onSubmit={handleSignUp}>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" required />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" required />    
            </div>
            <div className="form-control">
                <label htmlFor="password">Confirm Password</label>
                <input type="password" name="confirm" id="" required />    
            </div>
            <p><small>{error}</small></p>
            <input className='btn-submit' type="submit" value="Login" />
        </form>
        <p><small>Already Account ? <Link to="/login">Login</Link></small></p>
    </div>
    );
};

export default SignUp;