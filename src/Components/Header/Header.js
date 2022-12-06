import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/Code-Solution.png'
import { AuthContex } from '../Contex/GetUserContex';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const [theme, setTheme] = useState(true);
    const {user, logOut} = useContext(AuthContex);
    const  handlerSignOut = () => {
        logOut()
        .then(() => {

        })
        .catch(error => {
            console.error('error', error)
        })
    }
    return (
        <div className="navbar bg-neutral text-neutral-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral text-neutral-content rounded-box w-52">
                        <li><Link to={'/courses'}>Courses</Link></li>
                        <li><Link to={'/faq'}>FAQ</Link></li>
                        <li><Link to={'/blog'}>Blog</Link></li>
                        <li><button onClick={()=>{setTheme(!theme)}}>{theme ? 'Light Theme' : "Dark Theme"}</button></li>
                    </ul>
                </div>
                <div className="avatar">
                    <div className="w-8">
                    <img src={logo} alt="" />
                    </div>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">Code Solution Forces</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to={'/courses'}>Courses</Link></li>
                    <li><Link to={'/faq'}>FAQ</Link></li>
                    <li><Link to={'/blog'}>Blog</Link></li>
                    <li><button onClick={()=>{setTheme(!theme)}}>{theme ? 'Light Theme' : "Dark Theme"}</button></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid? <Link className="btn  btn-sm"><button onClick={handlerSignOut}>Log Out</button></Link> :
                    <Link to={'/login'} className="btn  btn-sm">Log In</Link>
                }
                <Link to={'/regitration'} className="btn  btn-sm">Sign Up</Link>
                <span className={user ? "tooltip tooltip-left tooltip-info" : ''} data-tip={user?.displayName}>{
                    user?.photoURL ?
                    <img className='w-8 rounded-full' src={user.photoURL} alt='this is user'/> : <FaUserCircle></FaUserCircle>
                }</span>
            </div>
        </div>
    );
};

export default Header;