import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const { signInUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [show, setShow] = useState(false);


    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
                console.log(error);
            })
    }


    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSignIn}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type={show ? "text" : "password"} name="password" required />
                    <p onClick={()=>setShow(!show)}><small>
                        {
                         show ? <span>Hide Password</span> : <span>Show password</span>
                        }    
                    </small></p>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New to Ema-john? <Link to="/signUp">Create New Account</Link></small></p>
        </div>
    );
};

export default Login;