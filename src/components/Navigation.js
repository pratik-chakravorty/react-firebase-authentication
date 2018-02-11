import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

import SignOutButton from './SignOut';

const Navigation = ({ authUser }) => (
    <div className="nav">
        {authUser ? <NavigationAuth /> : <NavigationNonAuth />}
    </div>
)

const NavigationAuth = () => (
    <ul className="nav-links">
        <li><Link to={routes.LANDING}>Login App</Link></li>
        <li><Link to={routes.HOME}>Home</Link></li>
        <li><Link to={routes.ACCOUNT}>Account</Link></li>
        <li><SignOutButton /></li>
    </ul>
)

const NavigationNonAuth = () => (
    <ul className="nav-links">
        <li><Link to={routes.LANDING}>Login App</Link></li>
        <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
    </ul>
)

export default Navigation;


