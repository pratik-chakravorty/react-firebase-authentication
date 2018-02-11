import React from 'react';

import { auth } from '../firebase';

import * as routes from '../constants/routes';

const SignOutButton = ({ history }) => (
    <button
        type="button"
        className="sign-out-button"
        onClick={auth.doSignOut}
    >
        Sign Out
    </button>
)

export default SignOutButton;