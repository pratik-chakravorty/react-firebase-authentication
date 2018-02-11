import React from 'react';

import withAuthorization from './withAuthorization';

const HomePage = () => (
    <div>
        <h1 className="hero-title">Home Page</h1>
        <h1 className="home-content">The home page is accessible by every signed in user.</h1>
    </div>
)

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);