import React from 'react';

import withAuthorization from './withAuthorization';

const AccountPage = () => (
    <div>
        <h1 className="hero-title">Account Page</h1>
        <h1 className="home-content">Only accessible to signed in users.</h1 >
    </div>
)


const authCondition = (authUser) => !!authUser;
export default withAuthorization(authCondition)(AccountPage);
