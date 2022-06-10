import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asset/picture/logo.png';

const Navbar = () => {
    return (
        <div>
            <div class="navbar bg-secondary">
                <div class="flex-1">
                    <Link to='/home' class="btn btn-ghost normal-case text-xl"><img src={logo} alt="" /></Link>
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal p-0">
                        <li><Link to='/home'>Home</Link></li>
                        <li><a href="#about">About</a></li>
                        <li><a href='#contrac'>Contract Me</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;