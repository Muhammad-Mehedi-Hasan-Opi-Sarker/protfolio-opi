import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asset/picture/logo.png';

const Navbar = () => {
    return (
        <div>
            <div class="navbar bg-secondary">
                <div class="flex-1">
                    <a class="btn btn-ghost normal-case text-xl"><img src={logo} alt="" /></a>
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal p-0">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><a>Contract Me</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;