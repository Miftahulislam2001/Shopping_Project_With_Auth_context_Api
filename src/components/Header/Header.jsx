import React, { useContext, useState } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {
    const {user, logOutUser} = useContext(AuthContext)
    const [error, setError] = useState('');

    const handleSignOut = () =>{
        logOutUser()
        .then(()=>{})
        .catch(error => setError(error))
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signIn">SignUp</Link>
                {user && <span className='text-white'>{user.email} <button className='btn' onClick={handleSignOut}>LogOut</button></span>}
            </div>
        </nav>
    );
};

export default Header;